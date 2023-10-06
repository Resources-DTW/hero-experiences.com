function init() {
	new SmoothScroll(document, 200, 20)
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


$(function () {
	init();


	var layers = document.querySelectorAll(".screen .layer");
	for (var i = 0; i < layers.length; i++) {
		var d = [];
		d.layer = layers[i];
		d.section = d.layer.closest('.section');
		d.sectionTop = d.section.offsetTop;
		d.sectionHeight = d.section.offsetHeight;
		d.start_p = d.layer.dataset.start || 0;
		d.end_p = d.layer.dataset.end || 100;
		d.start = d.sectionTop + ((d.start_p * d.sectionHeight) / 100);
		d.end = d.sectionTop + ((d.end_p * d.sectionHeight) / 100);
		

		mdata[i] = d;
	}


	window.addEventListener("scroll", function () {

		for (var i = 0; i < mdata.length; i++) {
			var d = mdata[i];
			var st = window.scrollY;
			console.log(d.start,d.end,st);
			if (st > d.start && st < d.end) {
				d.pf = (st - d.start) / (d.end - d.start);
				doaction(d);
			}else{
				d.layer.style.opacity = null;
				//d.layer.style.transform = null;
			}
		}
	});

	function doaction(d) {
	
		var x = parseFloat(((d.layer.dataset.x * d.layer.offsetWidth)/100)* d.pf);
		var y = parseFloat(d.layer.dataset.y / 100 * d.pf * d.layer.offsetHeight);
		var z = parseFloat(d.layer.dataset.z * d.pf);
		var s = parseFloat(1 + (d.layer.dataset.s * d.pf));
		
		if (typeof d.layer.dataset.o !== 'undefined') {
			var o = parseFloat((d.layer.dataset.o * d.pf * 10));
			d.layer.style.opacity = o; 
		}

		if (!isNaN(x) && !isNaN(y)) {
			d.layer.style.transform = "translate3d(" + x + "px, " + y + "px, 0) scale3d(" + s + "," + s + "," + s + ")";
		}
	}


});