$(document).ready(function() {

	// SET INTRO HEIGHT AND CENTER
	var screen_height = $(window).height();
	var intro_height = $('.intro .container').height();
	var intro_margin = (screen_height - intro_height)/2.5;

	$('.intro').height( screen_height ).css('padding-top', intro_margin);

	// FIT TEXT
	$('.intro p').fitText();

	// INTRO HOVERS
	var default_text = $('.intro-text span').text();
	var text_container = $('.intro-text span');

	// function to hide text
	/*
	var default_length = default_text.length/2;
	var tId;
	function hide_text() {
		i = 1;
		tId = setInterval(function() {
			$(text_container).text(default_text.slice(0, -i).slice(i));
			i++;
			if (i == default_length) {
				clearInterval(tId);
			}
		},20);
	}
	*/

	function intro_text(link, text) {
		$(link).hover(
			function(){
				$(text_container).text(text);
			},
			function(){
				$(text_container).text(default_text);
			}
		);
	}
	intro_text('.about-link', 'I like simple Interfaces.');
	intro_text('.projects-link', 'I design and code.');
	intro_text('.contact-link', "Let's get in touch!");
	intro_text('.scroll-down', "(^_^)");



	// SMOOTH SCROLLS
	function smooth_scroll(link, destination){
		$(link).bind('click',function(event){
			$('html, body').animate({
				scrollTop: $(destination).offset().top
			}, 1000);
			event.preventDefault();
		});
	}
	smooth_scroll('.scroll-down', '#projects');
	smooth_scroll('.about-link', '#about');
	smooth_scroll('.projects-link', '#projects');
	smooth_scroll('#home-link', '.intro');

	// SHOW NAVBAR
	var navbar = $('.site-header');
	navbar.hide();
	$('#intro-nav').waypoint(
		function(direction){
			if (direction === 'down')
			{
				navbar.fadeIn();
			}
			else
			{
				navbar.fadeOut();
			}
		}
	);

	// PROJECTS
	$("a[rel*=leanModal]").leanModal({ top : 100, overlay : 0.6});


	// PROJECTS ICON
	var projects = Raphael('projects-icon', 70, 70);
	var projects_icon = projects.path('M30,59 C20,58 11,49 10,39 L17,39 L17,30 L10,30 C11,20 20,11 30,10 L30,17 L39,17 L39,10 C49,11 58,20 60,30 L52,30 L52,39 L59,39 C58,49 49,58 39,60 L39,52 L30,52 Z M31,31 L31,39 L39,39 L39,31 Z M31,31').attr({fill:orange, 'stroke-width':'0'});

	$('#projects-icon').hover(
		function(){
			projects_icon.animate({
				transform: 'r360'
			}, 1000);
		},
		function(){
			projects_icon.animate({
				transform: 'r0'
			}, 300);
		}
	);

	// ABOUT ICON
	var about = Raphael('about-icon', 70, 70);
	var about_outer = about.circle(35,35,25).attr({fill:orange, 'stroke-width':'0'});
	var about_shape = about.path('M27,47 C22,45 20,40 20,35 C20,26 26,20 35,20 C43,20 50,26 50,35 C50,40 47,45 42,47 C47,48 50,50 52,52 C47,57 41,60 35,60 C28,60 22,57 17,52 C19,50 22,48 27,47 L27,47 Z M27,47').attr({fill:'#fff', 'stroke-width':'0'});

	$('#about-icon').hover(
		function(){
			about_shape.animate({
				transform: 'r540,35,35'
			}, 500);
		},
		function(){
			about_shape.animate({
				transform: 'r0,35,35'
			}, 300);
		}
	);

});