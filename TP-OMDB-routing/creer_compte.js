
function creerCompte(){

	var autorisationLogin = true;
	var autorisationPassword = true;
	var login = document.getElementById("login").value;
	var password = document.getElementById("password").value;

	if (login == "") {
		console.log("Login vide : Veuillez insérer une adresse e-mail valide");
		autorisationLogin = false;
	}
	if (password == "") {
		console.log("Password vide : Veuillez insérer un mot de passe valide");
		autorisationPassword = false;
	}
	if (autorisationPassword == true && autorisationLogin == true) {
		var user = {login:login, password:password};
		var listUser = JSON.parse(localStorage.getItem("listUser"));
		if(listUser == null){
			listUser = []
		}

		if(testerDoublonUser(listUser, user) == false){
			listUser.push(user);
			localStorage.setItem('listUser',JSON.stringify(listUser));
			localStorage.setItem('user', user);
			console.log(listUser);
		}
	}
}

function testerDoublonUser(listUser, user){
	var testDoublonUserKO = false;
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
	return testDoublonUserKO;
}

