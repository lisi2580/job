define(['routes','services/dependencyResolverFor'], function(config, dependencyResolverFor)
{
    var app = angular.module('app', ['ui.router']);

    app.config(
    [
        '$stateProvider',
        '$urlRouterProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',


        function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
        {
            app.controller = $controllerProvider.register;
            app.directive  = $compileProvider.directive;
            app.filter     = $filterProvider.register;
            app.factory    = $provide.factory;
            app.service    = $provide.service;

            //$locationProvider.html5Mode(true);
            $stateProvider.state('app',{
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'content': {
                        templateUrl: 'views/content.html'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            });
            
            if(config.routes !== undefined)
            {
                angular.forEach(config.routes, function(route, path)
                {
                    // $routeProvider.when(path, {
                    //     templateUrl: route.templateUrl,
                    //     controller: route.controller,
                    //     resolve: dependencyResolverFor(route.dependencies)
                    // });
                    $stateProvider.state('app.' + path, {
                        url: path,
                        views: {
                            'content@': {
                                templateUrl: route.templateUrl,
                                controller: route.controller,
                                resolve: dependencyResolverFor(route.dependencies)
                            }
                        }
                    })
                });
            }

            if(config.defaultRoutePaths !== undefined)
            {
                $urlRouterProvider.otherwise({redirectTo:config.defaultRoutePaths});
            }
        }
    ]);

   return app;
});