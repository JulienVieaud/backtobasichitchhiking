var app = angular.module('angularApp');

app.controller('page1Controller', function($routeParams, function($http)) {
  this.title = "Bienvenue sur page du film sélectionné";

  var urlBase = 'http://www.omdbapi.com/?apikey=755fc6ba&i=';
  var  ctrl = this;

  this.updateSearchDetail = function()
  {
    var url = urlBase + $routeParams.imdbID;

    $http.get(url) //mise à jour de l'url

    .then(buildList)
    }

  function buildList(answer){
    ctrl.movieDetail = answer.data;
  }
  this.displaySearchedMovie = function(){
    console.log("Le bouton fonctionne")
  }
});
