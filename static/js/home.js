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

	// INTRO SVG VARIABLES
	r = 75;
	d = 75 * 2;

	// DESIGN SVG
	var design = Raphael('design', 150, 150);
	var design_outer = design.circle(r,r,r).attr({fill:'#ffffff', 'stroke-width':'0'});
	var design_shape = design.path('M75,125 C47,125 25,102 25,75 C25,47 47,25 75,25 C102,25 125,47 125,75 C125,102 102,125 75,125 L75,125 Z M75,105 C91,105 105,91 105,75 C105,58 91,45 75,45 C58,45 45,58 45,75 C45,91 58,105 75,105 L75,105 Z M75,105').attr({fill:'#ccc', 'stroke-width':'0'});

	// INTRO SVG
	var intro = Raphael('intro', 150, 150);
	var intro_outer = intro.circle(r,r,r).attr({fill:'#ffffff', 'stroke-width':'0'});
	var intro_shape = intro.path('M125,65 L125,85 L85,85 L85,125 L65,125 L65,85 L25,85 L25,65 L65,65 L65,25 L85,25 L85,65 L125,65 L125,65 Z M125,65').attr({fill:'#ccc', 'stroke-width':'0'});

	// BUILD SVG
	var build = Raphael('build', 150, 150);
	var build_outer = build.circle(r,r,r).attr({fill:'#ffffff', 'stroke-width':'0'});
	var build_shape = build.path('M74,25 L125,75 L74,125 L25,74 L74,25 L74,25 Z M74,45 L45,74 L74,105 L105,75 L74,45 L74,45 Z M74,45').attr({fill:'#ccc', 'stroke-width':'0'});

	// DESIGN HOVER ANIMATION
	var design_hover = design.circle(r,r,1).attr({fill:white, 'stroke-width':'0'});
	$('#design').hover(
		function(){
			intro_shape.animate({
				fill: pink
			}, 1000)
			design_shape.animate({
				transform: 's0.5'
			}, 500)
			design_hover.attr({fill:darkBlue});
			design_hover.animate({
				transform: 's75'
			}, 1000)
		}
	);

	// INTRO HOVER ANIMATION
	$('#intro').hover(
		function(){
			intro_shape.animate({
				transform: 'r135'
			}, 500)
			design_shape.animate({
				fill:pink
			}, 1000)
			build_shape.animate({
				fill:green
			}, 1000)
		}
	);

	// DESIGN HOVER ANIMATION
	var build_hover = build.circle(r,r,1).attr({fill:white, 'stroke-width':'0'});
	$('#build').hover(
		function(){
			intro_shape.animate({
				fill: green
			}, 1000)
			build_shape.animate({
				transform: 'r180'
			}, 500)
			build_hover.attr({fill:darkBlue});
			build_hover.animate({
				transform: 's75'
			}, 1000)
		}
	);

});