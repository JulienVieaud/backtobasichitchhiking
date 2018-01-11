var app = angular.module('angularApp');

app.controller('page_qui_sommes_nous_Controller', function($routeParams){
  this.title = "Qui sommes-nous ?";

//, ['uiGmapgoogle-maps']
  // app.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
  //   uiGmapGoogleMapApiProvider.configure({
  //     key: "AIzaSyAcSblP792wWAuyg1NyLA-Y7nBVk-2ZIw0", //Clé pour utiliser l'API
  //     v: '3.17', //Par défaut la version la plus récente disponible
  //     libraries: 'geometry,visualization' //Librairies supplémentaires
  //
  //     $scope.map = {
  //       center: {
  //         latitude: 48.140316, //Position initial de la carte
  //         longitude: -1.763269
  //       },
  //       zoom: 12 // de 0 à 19, 0 étant la valeur de zoom la plus forte
  //     };
  //
  //     $scope.markers = [{
  //       coord: {
  //         latitude: 48.140316, //Coordonnées où placer le point
  //         longitude: -1.763269
  //       }
  //     ]}
  //   });
  // ]);
});




// function initMap() {
// var adresse = {lat: 48.140316, lng: -1.763269};
// var map = new google.maps.Map(document.getElementById('map'), {
//   zoom: 12,
//   center: adresse
//   });
// var marker = new google.maps.Marker({
//   position: adresse,
//    map: map
//   });
// }
