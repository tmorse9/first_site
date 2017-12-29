angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .when('/aboutme', {
      templateUrl: 'views/aboutme.html',
      controller: 'ContentController'
    });

  $locationProvider.html5Mode(true);
}]);
