var routes = require('./routes');

module.exports = /*@ngInject*/ function config($routeProvider){
    routes.forEach(route => {
       $routeProvider.when(route.when, route);
    });

    $routeProvider.otherwise({
      redirectTo: '/'
    });
};