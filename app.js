$('#show').click(function(){
	$.ajax('http://192.168.1.21:3000/places')
	.done(ajaxDone)
	.fail(ajaxFail)
	.always(ajaxAlways);

	function ajaxDone(response) {
	    var listplaces = response["places"];
	    console.log(listplaces);
	    //Affichage des places sur la page web -> marche
	    for (var i = 0; i < listplaces.length; i++) {
	      	$('ul').append('<li>' + listplaces[i]["nom"] + '</li>');
	    }
		
		//Affichage du mot de passe sur le body -> ne marche pas
		if(listplaces === listplaces["IoT Valley"]){
         	var motDePasse = listplaces["IOT Valley"]["password"];
         	$('body').text("mot de passe:" + motDePasse);
      	}      
   	}

	function ajaxFail(response) {
		console.log("Fail");
	}

	function ajaxAlways(completer){
		console.log("Always");
	}
});