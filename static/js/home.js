$(document).ready(function() {

	// SET INTRO HEIGHT AND CENTER
	var screen_height = $(window).height();
	var intro_height = $('.home-intro .container').height();
	var intro_margin = (screen_height - intro_height)/4;

	$('.home-intro').height( screen_height ).css('padding-top', intro_margin);


	// SMOOTH SCROLL TO ABOUT
	$('.about-link').bind('click',function(event){
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 1000);
		event.preventDefault();
	});


});