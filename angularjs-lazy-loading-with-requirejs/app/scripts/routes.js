define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            'home': {
                templateUrl: 'views/home.html',
                controller: 'HomeViewController',
                dependencies: [
                    'controllers/HomeViewController'
                ]
            },
            'about': {
                templateUrl: 'views/about.html',
                controller: 'AboutViewController',
                dependencies: [
                    'controllers/AboutViewController',
                    'directives/app-color'
                ]
            },
            'contact': {
                templateUrl: 'views/contact.html',
                controller: 'ContactViewController',
                dependencies: [
                    'controllers/ContactViewController'
                ]
            }
        }
    };
});