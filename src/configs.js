const configs = {

    // Standing duration at origin and destination in milliseconds
    standingDuration: 60000,

    // Minimum standing duration in milliseconds
    minStandingDuration: 30000,

    // Interval of refreshing train positions in milliseconds
    trainRefreshInterval: 60000,

    // All train positions will be refreshed if the screen has been inactive for this duration
    refreshTimeout: 10000,

    // Interval of refreshing weather information in milliseconds
    weatherRefreshInterval: 60000,

    // Interval of checking train positions based on real-time data in milliseconds
    realtimeTrainCheckInterval: 15000,

    // Maximum train speed in km/h
    maxSpeedKMPH: 80,

    // Train acceleration in km/h/s
    accelerationKMPHPS: 3,

    // Maximum train speed in km/ms
    get maxSpeed() {
        return configs.maxSpeedKMPH / 3600000;
    },

    // Train acceleration in km/ms^2
    get acceleration() {
        return configs.accelerationKMPHPS / 3600000000;
    },

    // Time required to reach maximum train speed in milliseconds
    get maxAccelerationTime() {
        return configs.maxSpeed / configs.acceleration;
    },

    // Distance required to reach maximum train speed in kilometers
    get maxAccDistance() {
        return configs.maxAccelerationTime * configs.maxSpeed / 2;
    },

    // Maximum flight speed in km/h
    maxFlightSpeedKMPH: 500,

    // Flight acceleration in km/h/s
    flightAccelerationKMPHPS: 12,

    // Maximum flight speed in km/ms
    get maxFlightSpeed() {
        return configs.maxFlightSpeedKMPH / 3600000;
    },

    // Flight acceleration in km/ms^2
    get flightAcceleration() {
        return configs.flightAccelerationKMPHPS / 3600000000;
    },

    // Delay in milliseconds for minimizing precision error
    minDelay: 25000,

    // Minimum flight interval in milliseconds
    minFlightInterval: 90000,

    // Origin of coordinates (around Tokyo station)
    originCoord: [139.7670, 35.6814],

    // Default zoom level
    defaultZoom: 14,

    // Default bearing (rotation) of the map
    defaultBearing: 0,

    // Default pitch in degrees
    defaultPitch: 60,

    // Default frame rate for train and aircraft animations
    defaultFrameRate: 60,

    // Default tracking mode
    defaultTrackingMode: 'helicopter',

    // API URL
    apiUrl: {

        // Tokyo Challenge URL
        tokyochallenge: 'https://api-tokyochallenge.odpt.org/api/v4/',

        // ODPT URL
        odpt: 'https://api.odpt.org/api/v4/'

    },

    // Keisei Location URL
    keiseiUrl: 'https://zaisen.tid-keisei.jp/data/traffic_info.json',

    // ATIS URL
    atisUrl: 'https://mini-tokyo.appspot.com/atisinfo',

    // Nowcasts URL
    nowcastsUrl: 'https://mini-tokyo.appspot.com/nowcast',

    // Secrets URL
    secretsUrl: 'secrets',

    // Default data URL
    dataUrl: 'https://minitokyo3d.com/data',

    // Timestamp when the static data was last updated
    lastStaticUpdate: '2020-06-09 11:00:00',

    // String to show in an Mapbox's AttributionControl
    customAttribution: '<a href="https://github.com/nagix/mini-tokyo-3d">© Akihiko Kusanagi</a>',

    // Share URL
    shareUrl: 'https://minitokyo3d.com',

    // Supported events
    events: [
        'boxzoomcancel',
        'boxzoomend',
        'boxzoomstart',
        'click',
        'contextmenu',
        'dblclick',
        'drag',
        'dragend',
        'dragstart',
        'error',
        'load',
        'mousedown',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'move',
        'moveend',
        'movestart',
        'pitch',
        'pitchend',
        'pitchstart',
        'resize',
        'rotate',
        'rotateend',
        'rotatestart',
        'touchcancel',
        'touchend',
        'touchmove',
        'touchstart',
        'wheel',
        'zoom',
        'zoomend',
        'zoomstart'
    ]
};

export default configs;
