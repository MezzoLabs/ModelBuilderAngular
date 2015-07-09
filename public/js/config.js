var routes = require('./routes');

module.exports = /*@ngInject*/ ($routeProvider, $locationProvider) => {
    $locationProvider.html5Mode(true);

    routes.forEach(route => {
       $routeProvider.when(route.when, route);
    });

    $routeProvider.otherwise({
      redirectTo: '/'
    });
};