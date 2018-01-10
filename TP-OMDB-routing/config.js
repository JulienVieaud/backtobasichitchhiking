var app = angular.module('angularApp', ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/page1/:imdbID", {
    templateUrl : "/page1.html",
    controller : 'page1Controller as ctrl'
  })
  .when("/home", {
    templateUrl : "home.html",
    controller: 'homeController as ctrl'
  })
  .otherwise({ redirectTo: '/home' });
  //  $locationProvider.html5Mode({
  //    enabled: true,
  //    requireBase: false
  //  });
});
