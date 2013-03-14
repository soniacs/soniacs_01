$(document).ready(function() {

	// SET INTRO HEIGHT AND CENTER
	var screen_height = $(window).height();
	var intro_height = $('.intro .container').height();
	var intro_margin = (screen_height - intro_height)/4;

	$('.intro').height( screen_height ).css('padding-top', intro_margin);

	// SMOOTH SCROLL
	$('.about-link').bind('click',function(event){
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 1000);
		event.preventDefault();
	});
	$('.projects-link').bind('click',function(event){
		$('html, body').animate({
			scrollTop: $("#projects").offset().top
		}, 1000);
		event.preventDefault();
	});
	$('#home-link').bind('click',function(event){
		$('html, body').animate({
			scrollTop: $(".intro").offset().top
		}, 1000);
		event.preventDefault();
	});

	// SHOW NAVBAR
	var navbar = $('.site-header')
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

	// PROJECTS HOVER
	$('.project-info').hide();
	$('.project').hover(
		function(){
			$(this).find('.project-info').fadeIn();
		},
		function(){
			$(this).find('.project-info').fadeOut();
		}
	);

	// INTRO SVG
	w = 490;
	h = 180;
	r = h/2;
	c = 75;
	var intro = Raphael('intro-graphic', w, h);
	var intro_outer = intro.circle(w/2,r,r).attr({fill:'#ffffff', 'stroke-width':'0'});
	var intro_shape = intro.path('M295,80 L295,100 L255,100 L255,140 L235,140 L235,100 L195,100 L195,80 L235,80 L235,40 L255,40 L255,80 L295,80 L295,80 Z M295,80').attr({fill:'#ccc', 'stroke-width':'0'}).transform('r45');

	// hover shapes
	var design_circle = intro.circle(c,r,c).attr({fill:darkBlue, 'stroke-width':'0'}).transform('s0');
	var build_circle = intro.circle(w-c,r,c).attr({fill:darkBlue, 'stroke-width':'0'}).transform('s0');
	var design_shape = intro.path('M75,140 C47,140 25,117 25,90 C25,62 47,40 75,40 C102,40 125,62 125,90 C125,117 102,140 75,140 L75,140 Z M75,120 C91,120 105,106 105,90 C105,73 91,60 75,60 C58,60 45,73 45,90 C45,106 58,120 75,120 L75,120 Z M75,120').attr({fill:'#fff', 'stroke-width':'0'}).transform('s0');
	var build_shape = intro.path('M414,40 L465,90 L414,140 L365,89 L414,40 L414,40 Z M414,60 L385,89 L414,120 L445,90 L414,60 L414,60 Z M414,60').attr({fill:'#fff', 'stroke-width':'0'}).transform('s0');
	var design_text = intro.text(c,r+5, "DESIGN").attr({fill:'#fff', 'font-size':'20px', 'font-weight':'bold','font-family':'Lato, Arial, sans-serif', 'opacity':'0.7'}).hide();
	var build_text = intro.text(w-c,r+5, "DEVELOP").attr({fill:'#fff', 'font-size':'20px', 'font-weight':'bold','font-family':'Lato, Arial, sans-serif', 'opacity':'0.7'}).hide();
	var design_hover = intro.circle(c,r,c).attr({fill:'transparent', 'stroke-width':'0'}).transform('s0');
	var build_hover = intro.circle(w-c,r,c).attr({fill:'transparent', 'stroke-width':'0'}).transform('s0');

	// hover animations
	$('#intro-graphic').hover(
		function(){
			intro_outer.animate({
				transform: 's0.835'
			}, 300)
			intro_shape.animate({
				transform: 'r180'
			}, 500)
			design_circle.animate({
				transform: 's1'
			}, 500)
			design_shape.animate({
				transform: 's1'
			}, 800)
			build_circle.animate({
				transform: 's1'
			}, 500)
			build_shape.animate({
				transform: 's1r-135'
			}, 800)

			design_hover.hover(
				function(){
					design_text.show();
					design_shape.hide();
					intro_shape.animate({
						transform: 'r135'
					}, 300);
				},
				function(){
					design_text.hide();
					design_shape.show();
					intro_shape.animate({
						transform: 'r180'
					}, 300);
				}
			)
			build_hover.hover(
				function(){
					build_text.show();
					build_shape.hide();
					intro_shape.animate({
						transform: 'r225'
					}, 300);
				},
				function(){
					build_text.hide();
					build_shape.show();
					intro_shape.animate({
						transform: 'r180'
					}, 300);
				}
			)
		},
		function(){
			intro_outer.animate({
				transform: 's1'
			}, 300)
			intro_shape.animate({
				transform: 'r-45'
			}, 300)
			design_circle.animate({
				transform: 's0'
			}, 500)
			design_shape.animate({
				transform: 's0'
			}, 300)
			build_circle.animate({
				transform: 's0'
			}, 500)
			build_shape.animate({
				transform: 's0r135'
			}, 300)
		}
	);


	// PROJECTS ICON
	var projects = Raphael('projects-icon', 70, 70);
	var projects_icon = projects.path('M30,59 C20,58 11,49 10,39 L17,39 L17,30 L10,30 C11,20 20,11 30,10 L30,17 L39,17 L39,10 C49,11 58,20 60,30 L52,30 L52,39 L59,39 C58,49 49,58 39,60 L39,52 L30,52 Z M31,31 L31,39 L39,39 L39,31 Z M31,31').attr({fill:orange, 'stroke-width':'0'});

	$('#projects-icon').hover(
		function(){
			projects_icon.animate({
				transform: 'r360'
			}, 1000)
		},
		function(){
			projects_icon.animate({
				transform: 'r0'
			}, 300)
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