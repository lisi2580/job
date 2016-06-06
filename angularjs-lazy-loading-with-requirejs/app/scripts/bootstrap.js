require.config({
    baseUrl: 'scripts',
    paths: {
		'angular': 'lib/angular',
		//'angular-route': 'lib/angular-route',
        'router': 'lib/angular-ui-router',
		'bootstrap': '../lib/bootstrap/js/bootstrap.min',
		'jquery': 'lib/jquery-1.11.0'
    },
	shim: {
		'app': {
			deps: ['angular', 'router', 'bootstrap']
		},
		'router': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		}
	},
    urlArgs: "t=" +  (new Date()).getTime()
});

require
(
    [
        'app'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);