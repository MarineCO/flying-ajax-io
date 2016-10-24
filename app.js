$('#show').click(function(){
	$.ajax('http://192.168.1.21:3000/places')
	.done(ajaxDone)
	.fail(ajaxFail)
	.always(ajaxAlways)

	function ajaxDone(response) {
		var listplaces = response["places"];
		console.log(listplaces);

		for (var i = 0; i < listplaces.length; i++) {
			$('#list').append('<li>' + listplaces[i]["nom"] + '</li>');

			if(listplaces[i].nom === "IoT Valley") {
				var motDePasse = listplaces[i].password;
				$("#password").html("Le mot de passe est :" + motDePasse);
			}
		}
	}

	function ajaxFail(response) {
		console.log("Fail");
	}

	function ajaxAlways(completer){
		console.log("Always");
	}
});
