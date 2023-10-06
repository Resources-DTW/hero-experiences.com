function init() {
	new SmoothScroll(document, 100, 10)
}

function SmoothScroll(target, speed, smooth) {
	if (target === document)
		target = (document.scrollingElement
			|| document.documentElement
			|| document.body.parentNode
			|| document.body) // cross browser support for document scrolling

	var moving = false
	var pos = target.scrollTop
	var frame = target === document.body
		&& document.documentElement
		? document.documentElement
		: target // safari is the new IE

	target.addEventListener('mousewheel', scrolled, { passive: false })
	target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

	function scrolled(e) {
		e.preventDefault(); // disable default scrolling

		var delta = normalizeWheelDelta(e)

		pos += -delta * speed
		pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

		if (!moving) update()
	}

	function normalizeWheelDelta(e) {
		if (e.detail) {
			if (e.wheelDelta)
				return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
			else
				return -e.detail / 3 // Firefox
		} else
			return e.wheelDelta / 120 // IE,Safari,Chrome
	}

	function update() {
		moving = true

		var delta = (pos - target.scrollTop) / smooth

		target.scrollTop += delta

		if (Math.abs(delta) > 0.5)
			requestFrame(update)
		else
			moving = false
	}

	var requestFrame = function () { // requestAnimationFrame cross browser
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (func) {
				window.setTimeout(func, 1000 / 50);
			}
		);

		// return(function (func) {
		// 	 		window.setTimeout(func, 1000 / 30);
		// 	 	});
	}()
}

function isElementInViewport(el) {
	// Special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}

	var rect = el.getBoundingClientRect();
	// console.log(window.innerHeight);
	// console.log(document.documentElement.clientHeight);
	// console.log(window.innerWidth);
	// console.log(document.documentElement.clientWidth);
	// console.log(rect);
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		parseInt(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
		parseInt(rect.right) <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
	);
}

var mdata = [];
function getTranslateValues(element) {
	const style = window.getComputedStyle(element)
	const matrix =
		style['transform'] || style.webkitTransform || style.mozTransform
	//console.log(matrix);
	// No transform property. Simply return 0 values.
	if (matrix === 'none' || typeof matrix === 'undefined') {
		return {
			x: 0,
			y: 0,
			z: 0,
			s: 0,

		}
	}

	// Can either be 2d or 3d transform
	const matrixType = matrix.includes('3d') ? '3d' : '2d'
	const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');


	// 2d matrices have 6 values
	// Last 2 values are X and Y.
	// 2d matrices does not have Z value.
	if (matrixType === '2d') {
		return {
			s: parseFloat(matrixValues[0]),
			x: parseFloat(matrixValues[4]),
			y: parseFloat(matrixValues[5]),
			z: 0,
		}
	}

	// 3d matrices have 16 values
	// The 13th, 14th, and 15th values are X, Y, and Z
	if (matrixType === '3d') {
		return {
			s: parseFloat(matrixValues[0]),
			x: parseFloat(matrixValues[12]),
			y: parseFloat(matrixValues[13]),
			z: parseFloat(matrixValues[14]),
		}
	}
}

function addToLayerArray(selector, data) {
	var layers = document.querySelectorAll(selector);
	for (var i = 0; i < layers.length; i++) {
		var d = [];
		d.layer = layers[i];
		d.section = d.layer.closest('.section');
		d.sectionTop = d.section.offsetTop;
		d.sectionHeight = d.section.offsetHeight;
		d.co = d.layer.style.opacity || 1;


		if (data.x || data.y || data.z) {
			//var style = window.getComputedStyle(d.layer);
			//var matrix = new WebKitCSSMatrix(style.transform);
			var matrix = getTranslateValues(d.layer);
			d.x = data.x || 0;
			d.y = data.y || 0;
			d.z = data.z || 0;
			d.cx = matrix.x || 0;
			d.cy = matrix.y || 0;
			d.cz = matrix.z || 0;
			//d.fy = data.fy || 0;
		}
		if (data.s) {
			var matrix = getTranslateValues(d.layer);
			d.s = data.s || 0;
			d.cs = matrix.s || 1;
		}
		if (data.opacity) {
			d.opacity = data.opacity || 0;
		}

		if (data.blur_start || data.blur_end) {
			d.blur_start = data.blur_start || 0;
			d.blur_end = data.blur_end || 0;
		}


		d.start_percent = data.start || 0;
		d.end_percent = data.end || 100;
		d.start = d.sectionTop + ((d.start_percent * d.sectionHeight) / 100);
		d.end = d.sectionTop + ((d.end_percent * d.sectionHeight) / 100);

		mdata.push(d);
	}


}

function doaction(d) {
	if (d.st > d.start && d.st < d.end) {
		var style = "";
		if (d.x || d.y || d.z || d.s) {

			if (d.x || d.y || d.z) {
				var x = parseFloat(((d.x * d.layer.offsetWidth) / 100) * d.pf);
				var y = parseFloat(d.y / 100 * d.pf * d.layer.offsetHeight);
				var z = parseFloat(d.z * d.pf);
				var rx = d.cx + x;
				var ry = d.cy + y;
				var rz = d.cz + z;
				style = "translate3d(" + rx + "px, " + ry + "px, " + rz + "px)";
			}
			if (d.s) {
				var s = parseFloat(d.cs + (d.s * d.pf));
				var rs = s;
				style = style + " scale3d(" + rs + "," + rs + "," + rs + ")";
			}
			d.layer.style.transform = style;
		}

		if (d.blur_start || d.blur_end) {

			var blur = (parseFloat((d.blur_start / 100) + ((d.blur_end - d.blur_start) / 100 * d.pf)));
			var flt = "blur(" + blur + "rem)";
			d.layer.style.filter = flt;
			d.layer.style.webkitFilter = flt;

		}

	}



	if (d.opacity && d.opacity < 2 && d.opacity >= -1) {
		var o = parseFloat((d.opacity * d.pf));

		var ro = d.co + o;
		if (ro < 0) {
			ro = 0;

		}
		if (ro > 1) {
			ro = 1;
		}

		if (d.opacity == 1) {
			if (ro <= 0) {
				d.layer.style.display = 'none';
			} else {
				d.layer.style.display = 'flex';
			}
		}

		d.layer.style.opacity = ro;
	}


}

function doDesktop() {
	//addToLayerArray('.section1 .layer_1', { 'x': 0, 'y': 0, 'z': 0, 's': 0, 'start': 0, 'end': 70 });

	addToLayerArray('.section1 .layer_1', { 'x': 0, 'z': 50, 'start': 0, 'end': 80 });
	addToLayerArray('.section1 .layer_2', { 'x': -15, 'y': -5, 'z': 200, 'start': 0, 'end': 100 });
	addToLayerArray('.section1 .layer_3', { 'x': -10, 'y': 10, 'z': 250, 'start': 0, 'end': 100 });
	addToLayerArray('.section1 .layer_4', { 'x': -10, 'y': 10, 'z': 600, 'start': 0, 'end': 60 });
	addToLayerArray('.section1 .layer_5', { 'opacity': 1, 'start': 50, 'end': 60 });

	addToLayerArray('.section1 .layer_2', { 'blur_start': 30, 'blur_end': 0, 'start': 0, 'end': 40 });
	addToLayerArray('.section1 .layer_3', { 'blur_start': 30, 'blur_end': 0, 'start': 0, 'end': 40 });


	addToLayerArray('.section2 .layer_1', { 'z': 100, 'start': 0, 'end': 100 });
	addToLayerArray('.section2 .layer_2', { 'x': 10, 'y': -10, 'z': 400, 'start': 0, 'end': 100 });
	//addToLayerArray('.section2 .layer_3', { 'x': 0, 'y': 0, 'z': 50, 'start': 0, 'end': 10 });
	addToLayerArray('.section2 .layer_3', { 'y': 5, 'start': 0, 'end': 60 });
	//addToLayerArray('.section2 .layer_3', { 'y': -5, 'start': 10, 'end': 20,'reset':true });
	//addToLayerArray('.section2 .layer_3', { 'fy':5,'y': -5, 'start': 10, 'end': 20 });

	addToLayerArray('.section2 .layer_4', { 'opacity': 1, 'start': 50, 'end': 60 });

	//addToLayerArray('.section3 .layer_1', { 'z': 100, 'start': 0, 'end': 100 });
	addToLayerArray('.section3 .layer_1', { 'z': -100, 'start': 0, 'end': 60 });
	addToLayerArray('.section3 .layer_2', { 'y': 0, 'z': -300, 'start': 0, 'end': 60 });
	addToLayerArray('.section3 .layer_3', { 'opacity': 1, 'start': 50, 'end': 60 });

	//addToLayerArray('.section4 .layer_2', { 'z': 100, 'start': 0, 'end': 100 });
	addToLayerArray('.section4 .layer_2', { 'x': 30, 'y': 20, 'z': -100, 'start': 0, 'end': 100 });
	addToLayerArray('.section4 .layer_3', { 'x': 30, 'y': -20, 'z': -200, 'start': 0, 'end': 100 });
	addToLayerArray('.section4 .layer_4', { 'x': -30, 'y': 10, 'z': 300, 'start': 0, 'end': 100 });
	addToLayerArray('.section4 .layer_5', { 'x': 30, 'y': -20, 'z': 400, 'start': 0, 'end': 100 });
	addToLayerArray('.section4 .layer_6', { 'opacity': 1, 'start': 50, 'end': 60 });

	addToLayerArray('.section5 .layer_1', { 'z': 100, 'start': 0, 'end': 100 });
	addToLayerArray('.section5 .layer_2', { 'x': -20, 'y': 20, 'z': 500, 'start': 0, 'end': 60 });
	addToLayerArray('.section5 .layer_3', { 'x': -20, 'y': 20, 'z': 500, 'start': 0, 'end': 60 });
	addToLayerArray('.section5 .layer_4', { 'opacity': 1, 'start': 50, 'end': 60 });
	addToLayerArray('.section5 .layer_2', { 'opacity': -1, 'start': 30, 'end': 35 });
	//addToLayerArray('.section5 .layer_3', { 'opacity': -1, 'start': 30, 'end': 35 });

	addToLayerArray('.section5 .layer_1', { 'blur_start': 30, 'blur_end': 0, 'start': 0, 'end': 20 });
	addToLayerArray('.section5 .layer_2', { 'blur_start': 0, 'blur_end': 30, 'start': 20, 'end': 40 });
	addToLayerArray('.section5 .layer_3', { 'blur_start': 0, 'blur_end': 30, 'start': 20, 'end': 40 });

	//addToLayerArray('.section5 .layer_2', { 'x': -200,  'start': 40, 'end': 50 });
	//addToLayerArray('.section5 .layer_3', { 'x': -200,'start': 40, 'end': 50 });


}

function doMobile() {

	addToLayerArray('.section1 .layer_1', { 'x': 0, 'z': 50, 'start': 0, 'end': 80 });
	addToLayerArray('.section1 .layer_2', { 'x': -100, 'y': -5, 's': 2, 'start': 0, 'end': 100 });
	addToLayerArray('.section1 .layer_3', { 'x': -100, 'y': 10, 's': 2, 'start': 0, 'end': 100 });
	addToLayerArray('.section1 .layer_4', { 'x': -400, 'y': 10, 's': 4, 'start': 0, 'end': 60 });
	addToLayerArray('.section1 .layer_5', { 'opacity': 1, 'start': 50, 'end': 60 });

	addToLayerArray('.section1 .layer_2', { 'blur_start': 30, 'blur_end': 0, 'start': 0, 'end': 40 });
	addToLayerArray('.section1 .layer_3', { 'blur_start': 30, 'blur_end': 0, 'start': 0, 'end': 40 });


	addToLayerArray('.section2 .layer_1', { 'z': 100, 'start': 0, 'end': 100 });
	addToLayerArray('.section2 .layer_2', { 'x': -60, 'y': 20, 's': 2, 'start': 0, 'end': 100 });
	//addToLayerArray('.section2 .layer_3', { 'x': 0, 'y': 0, 'z': 50, 'start': 0, 'end': 10 });
	addToLayerArray('.section2 .layer_3', { 'opacity': 0, 'start': 20, 'end': 100 });
	addToLayerArray('.section2 .layer_4', { 'opacity': 1, 'start': 50, 'end': 60 });

	//addToLayerArray('.section3 .layer_1', { 'z': 100, 'start': 0, 'end': 100 });
	addToLayerArray('.section3 .layer_1', { 'x': 0, 's': -0.5, 'start': 0, 'end': 40 });
	addToLayerArray('.section3 .layer_2', { 'x': 0, 's': -1, 'start': 0, 'end': 40 });
	addToLayerArray('.section3 .layer_3', { 'opacity': 1, 'start': 50, 'end': 60 });


	//addToLayerArray('.section4 .layer_2', { 'z': 100, 'start': 0, 'end': 100 });
	addToLayerArray('.section4 .layer_2', { 'x': 30, 'y': 20, 's': 2, 'start': 0, 'end': 100 });
	addToLayerArray('.section4 .layer_3', { 'x': 30, 'y': -20, 's': 2, 'start': 0, 'end': 100 });
	addToLayerArray('.section4 .layer_4', { 'x': -200, 'y': 10, 's': 1, 'start': 0, 'end': 100 });
	addToLayerArray('.section4 .layer_5', { 'x': 30, 'y': -20, 's': 2, 'start': 0, 'end': 100 });
	addToLayerArray('.section4 .layer_6', { 'opacity': 1, 'start': 50, 'end': 60 });

	addToLayerArray('.section5 .layer_1', { 's': 1, 'start': 0, 'end': 100 });
	addToLayerArray('.section5 .layer_2', { 'x': -130, 'y': 10, 's': 2.5, 'start': 0, 'end': 80 });
	addToLayerArray('.section5 .layer_3', { 'x': -130, 'y': 10, 's': 2.5, 'start': 0, 'end': 80 });
	addToLayerArray('.section5 .layer_4', { 'opacity': 1, 'start': 50, 'end': 60 });
	addToLayerArray('.section5 .layer_2', { 'opacity': -1, 'start': 30, 'end': 40 });
	addToLayerArray('.section5 .layer_3', { 'opacity': -1, 'start': 30, 'end': 40 });

	addToLayerArray('.section5 .layer_1', { 'blur_start': 30, 'blur_end': 0, 'start': 0, 'end': 20 });
	addToLayerArray('.section5 .layer_2', { 'blur_start': 0, 'blur_end': 30, 'start': 20, 'end': 30 });
	addToLayerArray('.section5 .layer_3', { 'blur_start': 0, 'blur_end': 30, 'start': 20, 'end': 30 });
}

$(function () {

	$(window).on("load", function () {
		$('.lc').css('opacity', 0);
		setTimeout(function () {
			$('.lc').hide();
		}, 500)

	});
	init();

	if (window.innerWidth < 970) {
		doMobile();
	} else {
		$('body').addClass('threed');
		doDesktop();
	}



	function processLoop(st) {
		for (var i = 0; i < mdata.length; i++) {
			var d = mdata[i];
			d.st = st;
			d.pf = (st - d.start) / (d.end - d.start);
			doaction(d);
		}
	}

	window.addEventListener("scroll", function () {
		var st = window.scrollY;
		processLoop(st);
	});


});