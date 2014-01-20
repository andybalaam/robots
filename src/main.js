requirejs.config({
    paths: {
		d3: 'd3-3.4.1',
		zepto: 'zepto-1.1.2',
		react: 'react-0.8.0',
		lodash: 'lodash-2.4.1',
		howler: 'howler-1.1.14'
	},
    shim: {
        'd3': {
            exports: 'd3'
        },
        'zepto': {
            exports: '$'
        }
    }
});

require(["robots", "domReady"], function(robots, onDomReady) {
	onDomReady(robots.start);
});
