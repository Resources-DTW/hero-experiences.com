@extends('web.layout.main')
@section('content')
<div class="container">
    <!-- <span class="mouse"></span> -->
    <div class="scroll-downs">
        <div class="mousey">
            <div class="scroller"></div>
        </div>
    </div>
    <div class="header">
        <div class="logo">
            <a href=""><img src="{{ asset('web/img/logo.png') }}" /></a>
        </div>
        <div class="menu">
            <!-- <a href=""><i class="fa-solid fa-bars"></i></a> -->
            <!-- <a href="">Register</a> -->
        </div>
    </div>
    <!-- Scene 1 -->
    <div class="section section2">
        <div class="screen">
            <div class="layer layer_1">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/2pa.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/2a.webp') }}">
                    <img src="{{ asset('web/img/scene/2a.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_2">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/2pb.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/2b.webp') }}">
                    <img src="{{ asset('web/img/scene/2b.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_3">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/2pc.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/2c.webp') }}">
                    <img src="{{ asset('web/img/scene/2c.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_4 overlay">
                <div class="content">
                    <div class="tag">SAFARI INTO THE PAST</div>
                    <div class="title">UNCOVER THE UNKNOWN</div>
                    <div class="desc">Travel into the past on an adventure of history and culture, and uncover a different side of this metropolitan city. Ignite the heroic spark within you as you journey through endless golden dunes, learning about stories of the past. Feel like a true HERO as you go beyond the everyday, to rediscover century-old traditions and experience Dubai in all its authenticity.</div>
                    <a href="" class="button">SAFARI INTO THE PAST</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Scene 2 -->
    <div class="section section3">
        <div class="screen">
            <div class="layer layer_1">
                <video width="1600" height="240" autoplay="" loop="" muted="">
                    <source src="{{ asset('web/img/scene/3a.mp4') }}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="layer layer_2">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/3pb.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/3b.webp') }}">
                    <img src="{{ asset('web/img/scene/3b.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_3 overlay">
                <div class="content">
                    <div class="tag">EXPERIENCE LUXURY</div>
                    <div class="title">IMMERSE IN LUXURY</div>
                    <div class="desc">Imagine what it must feel like to step into a lavish, lantern-lit desert sanctuary nestled deep within the heart of the desert. A hidden gem, concealed from the rest of the world. Here, you can bask in the regal ambiance and fully immerse yourself in an experience that makes you the protagonist in a thrilling adventure.</div>
                    <a href="" class="button">EXPERIENCE LUXURY</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Scene 3 -->
    <div class="section section1">
        <div class="screen">
            <div class="layer layer_1">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/1pa.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/1a.webp') }}">
                    <img src="{{ asset('web/img/scene/1a.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_2">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/1pb.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/1b.webp') }}">
                    <img src="{{ asset('web/img/scene/1b.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_3">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/1pc.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/1c.webp') }}">
                    <img src="{{ asset('web/img/scene/1c.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_4">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/1pd.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/1d.webp') }}">
                    <img src="{{ asset('web/img/scene/1d.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_5 overlay">
                <div class="content">
                    <div class="tag">SOAR THE SKIES OF DUBAI</div>
                    <div class="title">HEROES TAKES FLIGHT</div>
                    <div class="desc">We’ve all imagined what it would be like to fly on a hot air balloon, but only a few seize the moment to make that dream a reality. Don't let your dreams and aspirations slip through your fingers. Be the unbridled HERO of your own story – take action and let your dreams take flight.</div>
                    <a href="" class="button">SOAR THE SKIES OF DUBAI</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Scene 4 -->
    <div class="section section5">
        <div class="screen">
            <div class="layer layer_1">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/5pa.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/5a.webp') }}">
                    <img src="{{ asset('web/img/scene/5a.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_2">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/5pb.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/5b.webp') }}">
                    <img src="{{ asset('web/img/scene/5b.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_3">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/5pc.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/5c.webp') }}">
                    <img src="{{ asset('web/img/scene/5c.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_4 overlay">
                <div class="content">
                    <div class="tag">RISE ABOVE THE EVERYDAY</div>
                    <div class="title">DISCOVER EPIC VIEWS</div>
                    <div class="desc">Dare to soar beyond the ordinary? Ascend over the bustling city and transcend the familiar to gain a fresh vantage point on the world. Embracing a different perspective can ignite new passions, aspirations, and innovative solutions to daily challenges. Immerse yourself in breathtaking 360° aerial vistas of the city's record-breaking skyline, and feel like a true HERO as you rise above.</div>
                    <a href="" class="button">RISE ABOVE THE EVERYDAY</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Scene 5 -->
    <div class="section section4">
        <div class="screen">
            <div class="layer layer_1">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/4pa.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/4a.webp') }}">
                    <img src="{{ asset('web/img/scene/4a.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_2">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/4pb.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/4b.webp') }}">
                    <img src="{{ asset('web/img/scene/b.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_3">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/4pc.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/4c.webp') }}">
                    <img src="{{ asset('web/img/scene/4c.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_4">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/4pd.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/4d.webp') }}">
                    <img src="{{ asset('web/img/scene/4d.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_5">
                <picture>
                    <source media="(orientation: portrait)" srcset="{{ asset('web/img/scene/4pe.webp') }}">
                    <source media="(orientation: landscape)" srcset="{{ asset('web/img/scene/4e.webp') }}">
                    <img src="{{ asset('web/img/scene/4e.webp') }}" />
                </picture>
            </div>
            <div class="layer layer_6 overlay">
                <div class="content">
                    <div class="tag">RIDE THE WAVES</div>
                    <div class="title">CAPTAIN YOUR BOAT</div>
                    <div class="desc">With the wheel in your hand and the wind in your hair, this is an adventure that is yours to seize! Take charge of your journey along the city’s most iconic coastline and discover iconic landmarks from a new perspective. Captain your own vessel, and let the waves propel you into the role of a fearless HERO, conquering the waters in style.</div>
                    <a href="" class="button">RIDE THE WAVES</a>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="col">
            <div class="contact">
                <div><a href=""><i class="fa-solid fa-phone-flip"></i> Call Now: +971 4 440 9827</a></div>
                <div><a href=""><i class="fa-solid fa-envelope"></i> info@hero-experiences.com</a></div>
            </div>
            <div class="social">
                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                <a href=""><i class="fa-brands fa-x-twitter"></i></a>
            </div>
            <div class="other-logos">
                <a href=""><img src="{{ asset('web/img/logo1.png') }}" /></a>
                <a href=""><img src="{{ asset('web/img/logo2.png') }}" /></a>
                <a href=""><img src="{{ asset('web/img/logo3.png') }}" /></a>
                <a href=""><img src="{{ asset('web/img/logo4.png') }}" /></a>
            </div>
        </div>
        <div class="col">
            <div class="newsletter">
                <div class="title">Signup with us today</div>
                <div class="desc">Become a member for added benefits on your next experience</div>
                <form>
                    <input type="text" placeholder="Enter your email" />
                    <input type="submit" value="" />
                </form>
            </div>
        </div>
    </div>
    <div class="copyright">© Copyright 2023. Hero Experiences Group. All Rights Reserved</div>




</div>
@endsection