angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/contents', {
			templateUrl: 'views/content.html',
			controller: 'ContentController'
		})

		.when('/logics', {
			templateUrl: 'views/logic.html',
			controller: 'LogicController'
		});

	$locationProvider.html5Mode(true);

}]);
