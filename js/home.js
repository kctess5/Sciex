$(document).ready(function() { 

	function adjustSizes(){
		var height = parseInt($("#main-background-container").css("height"));
		var top = parseInt( $("#main-background-container").offset().top );
		$("#footer").css("top",height+top);
		$("#intro-bkg").css("height",height+top);
	}

	adjustSizes();

	$(window).on('resize', function(){
		adjustSizes(); 
	});


});
