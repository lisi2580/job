require.config({

    baseUrl: "js",
    
	// alias libraries paths
    paths: {
        angular: './angular.min',
        jquery: './jquery-1.11.0'
    },
    
    shim:{
        'angular':{
            exports:'angular'
        }
    }
});

//require(['jquery'], function($) {
//  alert($().jquery);
//});

require(['angular'], function(angular) {
    var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
	    $scope.firstName = "John";
	    $scope.lastName = "Doe";
	});
});