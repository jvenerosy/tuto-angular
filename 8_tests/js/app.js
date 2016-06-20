var app = angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider) {
  $routeProvider
  .when('/', {templateUrl: 'partials/home.html', controller: 'PostTasks'})
  .when('/todo/:id', {templateUrl: 'partials/task.html', controller: 'TasksCtrl'})
  .otherwise({redirectTo: '/404.html'});
});
