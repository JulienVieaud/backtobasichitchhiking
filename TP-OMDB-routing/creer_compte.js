

function creerCompte(){
	var autorisationLogin = 1;
	var autorisationPassword = 1;
	var login=document.getElementById("login").value;
	var password=document.getElementById("password").value;

	if (login == "") {
		console.log("Identifiant vide : Veuillez insérer une adresse e-mail valide");
		autorisationLogin = 0;
	}
	if (password == "") {
		console.log("Password vide : Veuillez insérer un mot de passe valide");
		autorisationPassword = 0;
	}

	if (autorisationLogin == 1 && autorisationPassword == 1) {
		var user={login:login, password:password};

		var listUser=JSON.parse(localStorage.getItem("listUser"));
		console.log(listUser);
		if(listUser==null){
			listUser=[]
		}

		testerDoublonUser(listUser, user);

		listUser.push(user);
		localStorage.setItem('listUser',JSON.stringify(listUser));
		localStorage.setItem('user', user);
		console.log(listUser);
	}
}

function testerDoublonUser(listUser, user){
	var testDoublonUserKO = 0;
	for (var i = 0; i < listUser.length; i++) {
		if (user.login == listUser[i].login){
			console.log(user.login + " : KO - Compte existe !");
			testDoublonUserKO = 1;
			break;
		}
	}
	if (testDoublonUserKO == 0) {
		console.log(user.login + " : OK - Nouveau compte");
	}
}

function testerDonnee(){

}

