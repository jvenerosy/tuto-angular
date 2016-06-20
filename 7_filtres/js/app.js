var app = angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider) {
  $routeProvider
  .when('/', {templateUrl: 'partials/home.html', controller: 'PostCtrl'})
  .when('/comments/:id', {templateUrl: 'partials/comments.html', controller: 'CommentsCtrl'})
  .otherwise({redirectTo: '/'});
});
