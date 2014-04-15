requirejs.config({
	'baseUrl': '/backbone-demo-master',
	'paths': {
		'app': '',
		// define libs paths
		'jquery': 'lib/jquery',
		'underscore': 'lib/underscore',
		'backbone': 'lib/backbone',
		'json2': 'lib/json2',
		'mustache': 'lib/mustache'
	},

	// Shim declaration
	'shim': {
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