angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'public/views/home.html',
      controller: 'MainController'
    })
    .when('/aboutme', {
      templateUrl: 'public/views/aboutme.html',
      controller: 'ContentController'
    });

  $locationProvider.html5Mode(true);
}]);
