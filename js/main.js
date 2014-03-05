$(document).ready(function() { 

	function killAnim() {
		controller.removeTween('#logo-container');
		$('#glasses-small').css("opacity",1);
		$('#header').css("width","100%");
		$('#feature').css("opacity",0);
		$('#prizes').css("opacity","")
		$('#main-background-container').css("opacity","")
		$('#intro-bkg').css("opacity",""); 
	}
	
	$( "#expand" ).click(function() { 
		$(this).toggleClass( "active" );
		$( "#small-menu").toggleClass( "active" );
	});

	var scrollDuration = 150;
	var controller = $.superscrollorama({
			playoutAnimations: false
	});

	controller.addTween(
		'#anim-trigger', 
		TweenMax.from( $('#intro-bkg'), .5, {
			css:{
				opacity: 0
			}}),
		scrollDuration*2,
		200
	);
	controller.addTween(
		'#anim-trigger', 
		TweenMax.from( $('#main-background-container'), .5, {
			css:{
				opacity: .5
			}}),
		scrollDuration*2,
		200
	);
	controller.addTween(
		'#anim-trigger', 
		TweenMax.from( $('#prizes'), .5, {
			css:{
				opacity: 0
			}}),
		scrollDuration*2,
		200
	);
	controller.addTween(
		'#anim-trigger', 
		TweenMax.to( $('#feature'), .5, {
			css:{
				left: "-50%"
			}}),
		scrollDuration*2,
		200
	);
	controller.addTween(
		'#anim-trigger', 
		TweenMax.to( $('#feature'), .5, {
			css:{
				opacity:0
			}}),
		1,
		200 + scrollDuration*2
	);
	controller.addTween(
		'#anim-trigger', 
		TweenMax.to( $('#header'), .5, {
			css:{
				width:"100%"
			}}),
		scrollDuration/2,
		200
	);
	controller.addTween(
		'#anim-trigger', 
		TweenMax.to( $('#glasses-small'), .5, {
			css:{
				opacity: 1
			}}),
		scrollDuration*2,
		200
	);

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		killAnim();
	}

	if (document.getElementById("home") == null){
		killAnim();
	}


});
