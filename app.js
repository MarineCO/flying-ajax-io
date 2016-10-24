$('#show').click(function(){
	$.ajax('http://192.168.1.21:3000/places')
	.done(ajaxDone)
	.fail(ajaxFail);

	function ajaxDone(response) {
		console.log(response);
	}

	function ajaxFail(response) {
		console.log(response);
	}

});