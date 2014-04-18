requirejs.config({
	'baseUrl': '',
	'paths': {
		'app': 'js/app/app',
		'commentcollection': 'js/model/commentcollection',
		'commentmodel': 'js/model/commentmodel',
		'commentview': 'js/view/commentview',
		'formview': 'js/view/formview',
		'listview': 'js/view/listview',
		'newbuttonview': 'js/view/newbuttonview',
		'randombuttonview': 'js/view/randombuttonview',
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
	var app = new App({el: $('#application')});
	app.initialize();
});