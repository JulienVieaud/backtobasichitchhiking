function creerCompte(){

	var login=document.getElementById("login").value;
	var password=document.getElementById("password").value;

	var user={login:login, password:password};

	var listUser=JSON.parse(localStorage.getItem("listUser"));
	console.log(listUser);
	if(listUser==null){
		listUser=[]
	}
	listUser.push(user);
	localStorage.setItem('listUser',JSON.stringify(listUser));
	localStorage.setItem('user', user);
	console.log(listUser);


}
