var app = angular.module('angularApp');

app.controller('homeController', function($http) {
  var urlBase = 'http://www.omdbapi.com/?apikey=755fc6ba&s=';
  var  ctrl = this;

  this.updateSearch = function()
  {
    var url = urlBase + this.searchedMovie;

    $http.get(url) //mise à jour de l'url

    .then(buildList)
    }

  function buildList(answer){
    ctrl.movieList = answer.data.Search;
  }
  this.displaySearchedMovie = function(){
  }
});
