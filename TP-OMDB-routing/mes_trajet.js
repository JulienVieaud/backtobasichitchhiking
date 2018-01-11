angular.module('angularApp', [])
.controller('NameController', function() {


  var  ctrl = this;
  var ListeTrajet=[];
  var trajet1={villeDepart:"Brehand", villeArrivee:"Rennes", dateDepart:"10/10/10", dateArrivee:"12/10/10", NbPlace:3, prix:15};
  var trajet2={villeDepart:"Paris", villeArrivee:"Londres", dateDepart:"45/13/10", dateArrivee:"12/14/10", NbPlace:4, prix:85};
  ListeTrajet.push(trajet1);
  ListeTrajet.push(trajet2);
  var user1={login:"billy", password:"bob", ListeTrajet:ListeTrajet, estConnecte: true};

  console.log(user1);

});