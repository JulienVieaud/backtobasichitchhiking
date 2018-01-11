
function creerCompte(){

	var autorisationLogin = true;
	var autorisationPassword = true;

	// aller chercher les variables 
	var login = document.getElementById("login").value;
	var password = document.getElementById("password").value;

	// test si les champq de saisies sont vide
	if (login == "") {
		console.log("Login vide : Veuillez insï¿½rer une adresse e-mail valide");
		autorisationLogin = false;
	}
	if (password == "") {
		console.log("Password vide : Veuillez insï¿½rer un mot de passe valide");
		autorisationPassword = false;
	}

	// si les champs de saisie ne sont pas vide, on crée un nouvelle utilisateur
	if (autorisationPassword == true && autorisationLogin == true) {
		var user = {login:login, password:password};
		var listUser = JSON.parse(localStorage.getItem("listUser"));
		if(listUser == null){
			listUser = []
		}

		// on test si un doublon existe avec la liste des utilisateurs existant, si non, on push l'utilisateur
		if(testerDoublonUser(listUser, user) == false){
			listUser.push(user);
			localStorage.setItem('listUser',JSON.stringify(listUser));
			localStorage.setItem('user', user);
			console.log(listUser);
		}
	}
}


function testerDoublonUser(listUser, user){

	//initialisation de la variable de test
	var testDoublonUserKO = false;

	// test de doublon sur chaque valeur du tableau en stockage 
	for (var i = 0; i < listUser.length; i++) {
		if (user.login == listUser[i].login){
			console.log(user.login + " : KO - Compte existe !");
			testDoublonUserKO = true;
			break;
		}
	}
	if (testDoublonUserKO == false) {
		console.log(user.login + " : OK - Nouveau compte");
	}
	//retour de la valeur de test
	return testDoublonUserKO;
}
