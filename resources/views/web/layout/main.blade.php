<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hero</title>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="{{ asset('web/css/style.css') }}?faz" type="text/css">


    <link rel="preload" href="{{ asset('web/img/scene/1a.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/1b.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/1c.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/1d.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/2a.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/2b.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/2c.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/3a.mp4') }}" as="video">
    <link rel="preload" href="{{ asset('web/img/scene/3b.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/4a.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/4b.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/4c.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/4d.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/4e.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/5a.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/5b.webp') }}" as="image" media="(orientation: landscape)">
    <link rel="preload" href="{{ asset('web/img/scene/5c.webp') }}" as="image" media="(orientation: landscape)">


    <link rel="preload" href="{{ asset('web/img/scene/1pa.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/1pb.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/1pc.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/1pd.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/2pa.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/2pb.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/2pc.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/3pb.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/4pa.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/4pb.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/4pc.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/4pd.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/4pe.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/5pa.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/5pb.webp') }}" as="image" media="(orientation: portrait)">
    <link rel="preload" href="{{ asset('web/img/scene/5pc.webp') }}" as="image" media="(orientation: portrait)">

    <style>
        .lc{position: fixed;width:100%;height: 100vh;background: #000;z-index: 999999;display: flex;justify-content: center;align-items: center;transition: 0.3s all;opacity: 1;}
        .loader {width: 48px;height: 48px;display: inline-block;position: relative;margin: auto;}
        .loader::after,.loader::before {content: '';box-sizing: border-box;width: 48px;height: 48px;border: 4px solid #FFF;position: absolute;left: 0;top: 0;animation: animloader 2s ease-in-out infinite;}
        .loader::after {border-color: #FF3D00;animation-delay: 1s;}
        @keyframes animloader {0% {transform: scale(0);opacity: 1;}100% {transform: scale(1);opacity: 0;}}
    </style>

</head>

<body>
    <!-- <div class="lc"><span class="loader"></span></div> -->
    @yield('content')

    <script type="text/javascript" src="{{ asset('web/js/main.js') }}"></script>
    <script type="text/javascript" src="{{ asset('web/js/site.js') }}?{{ time() }}"></script>
</body>

</html>