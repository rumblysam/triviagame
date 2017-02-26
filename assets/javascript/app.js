$(document).ready(function() {
	var number = 10;
	var url = '';

	function countdown() {
		setTimeout(countdown, 1000);
		$('#box').html("Redirecting in " + number + " seconds.");
		number--;

		if(number < 0) {
			window.location = url;
			number = 0;
		}
	}

	countdown(); //calling countdown function

});//end document ready