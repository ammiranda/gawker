requirejs.config({
	'baseUrl': './',
	'paths': {
		'app': 'js/app/app',
		// define libs paths
		'jquery': 'lib/jquery',
		'underscore': 'lib/underscore',
		'backbone': 'lib/backbone',
		'json2': 'lib/json2',
		'mustache': 'lib/mustache'
	},

	// Shim declaration
	'shim': {
		'jquery': {
			'exports': '$'
		},
		'underscore': {
			'exports': '_'
		},
		'backbone': {
			'deps': ['jquery', 'underscore'],
			'exports': 'Backbone'
		},
		'mustache': {
			'exports': 'Mustache'
		}
	}
});

require(['app'], function(App){
	var app = new App();
	app.initialize();
});