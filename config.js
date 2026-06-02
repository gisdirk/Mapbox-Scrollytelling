var config = {
    // style: 'mapbox://styles/elektrodirk/cmp9wn2z0003701sk47m3gpg5',
    // style: 'mapbox://styles/mapbox/standard-satellite',
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZWxla3Ryb2RpcmsiLCJhIjoiY2tkYTNnanEyMzE1NjJycXZuMnQyaHBlZSJ9.2aOI2VT-S8wNuBvTJfieCQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'mercator',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    start: 'BEGIN',
    title: '<span class="red-bull">Red Bull</span>',
    subtitle: 'Ultra 600',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'ch1',
            alignment: 'right',
            hidden: false,
            title: 'Inside the 600 km Ultramarathon',
            image: '',
            description: 'Arda Saatçi ran <span class="red">14 marathons in just five days </span> — crossing 600 kilometers from Death Valley to the Santa Monica Pier in 123 hours. Here is how he managed <strong> sleep deprivation, extreme desert heat, hydration, pacing, and recovery </strong>during one of the most punishing endurance runs imaginable.',
            location: {
            center: [-117.66547, 34.82024],
            zoom: 7.1,
            pitch: 40.97,
            bearing: 0.00
        },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'startPathAnimation',
            animationDuration: 10000, // Slow overview animation (10s)
            pathEnd: 1.0, // Show the full route (100%) in the overview
            onChapterEnter: [
                {
                    layer: 'route-layer',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: []
        },
        {
            id: 'ch2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'The route begins at <span class="blue-border">Badwater Basin</span>, the lowest point in the United States.',
            location: {
            center: [-116.86127, 36.30291],
            zoom: 10.23,
            pitch: 54.47,
            bearing: -11.20,
            duration: 6000,
        },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'startPathAnimation',
            pathStart: 0, // Force reset to the beginning
            animationDuration: 6000, // Snap to start segment (5s)
            pathEnd: 0.11, // Animate only to 10%
            onChapterEnter: [
                {
                    layer: 'route-layer',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'route-start-pulsing-layer',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'route-start-pulsing-layer',
                    opacity: 0,
                    duration: 500
                }
            ]
        },
        {
            id: 'ch3',
            alignment: 'right',
            hidden: false,
            title: 'Into the Mountains',
            image: '',
            description: 'Saatçi tackled the toughest and highest continuous climb of the route: <span class="red">1,510m of elevation </span> and up to a 10 percent incline followed by his first rest for about 20 minutes.',
            location: {
            center: [-117.20813, 36.55133],
            zoom: 11.23,
            pitch: 70.63,
            bearing: -172.24,
            duration: 6000,

        
        },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'startPathAnimation',
            pathStart: 0.11, // Ensure it starts exactly where Chapter 2 ended
            animationDuration: 7000,
            pathEnd: 0.17, // Continue progress to 15%
            onChapterEnter: [
                {
                    layer: 'route-layer',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: []
        },
        {
            id: 'ch4b',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'assets/arda1.avif',
            description: 'Arda Saatçi hits the <strong>100km mark</strong>',
            location: {
            center: [-117.20813, 36.55133],
            zoom: 11.23,
            pitch: 70.63,
            bearing: -172.24,
            duration: 4000,

        
        },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'route-layer',
                    opacity: 1,
                    duration: 500
                }
            ],
        },
        {
            id: 'ch5',
            alignment: 'right',
            hidden: false,
            title: 'The Final Push',
            image: '',
            description: 'After days of desert heat, climbing, and almost no sleep, Arda Saatçi entered the final stretch toward <span class="blue-border"> Santa Monica Pier</span>. Hallucinations had begun to set in, and even sandy terrain became exhausting. After one final climb near Summit Terrace, Saatçi crossed the <strong> 604.6km finish line </strong> at Santa Monica Pier in <strong>123 hours, 21 minutes, and 10 seconds.</strong>',
   location: {
    center: [-117.90190, 34.47949],
    zoom: 8.71,
    pitch: 72.50,
    bearing: 36.15,
            duration: 12000,
            essential: true
        },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'startPathAnimation',
            pathStart: 0.4, // Ensure it starts exactly where Chapter 2 ended
            animationDuration: 12000,
            pathEnd: 1, // Continue progress to 15%
            onChapterEnter: [
                {
                    layer: 'route-layer',
                    opacity: 1,
                    duration: 500
                },
                {
                    layer: 'route-end-pulsing-layer',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'route-end-pulsing-layer',
                    opacity: 0,
                    duration: 500
                }
            ]
        }
    ]
};
