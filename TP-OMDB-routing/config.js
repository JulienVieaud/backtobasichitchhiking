var app = angular.module('angularApp', ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/creer_compte/", {
    templateUrl : "/creer_compte.html",
    controller : 'creer_compte_Controller as ctrl'
  })
  .when("/qui_sommes_nous/", {
    templateUrl : "/qui_sommes_nous.html",
    controller : 'page_qui_sommes_nous_Controller as ctrl'
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
