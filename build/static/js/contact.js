$(document).ready(function() {

	// CONTACT ICON
	var contact = Raphael('contact-icon', 70, 70);

	var contact_icon = contact.path('M35,60 C30,60 25,58 21,56 L10,60 L13,48 C11,44 10,39 10,35 C10,21 21,10 35,10 C48,10 60,21 60,35 C60,48 48,60 35,60 L35,60 Z M35,60').attr({fill:orange, 'stroke-width':'0'});
	var contact_circle1 = contact.path('M33,53 C38,53 43,48 43,43 C43,37 38,33 33,33 C27,33 23,37 23,43 C23,48 27,53 33,53 Z M33,53').attr({fill:'#fff', 'stroke-width':'0'});
	var contact_circle2 = contact.path('M43,31 C46,31 49,28 49,25 C49,21 46,19 43,19 C39,19 37,21 37,25 C37,28 39,31 43,31 Z M43,31').attr({fill:'#fff', 'stroke-width':'0'});

	$('#contact-icon').hover(
		function(){
			contact_icon.animate({
				transform: 'r360,35,35'
			}, 500);
			contact_circle1.animate({
				transform: 'r360,35,35'
			}, 400);
			contact_circle2.animate({
				transform: 'r360,35,35'
			}, 500);
		},
		function(){
			contact_icon.animate({
				transform: 'r0,35,35'
			}, 300);
			contact_circle1.animate({
				transform: 'r0,35,35'
			}, 400);
			contact_circle2.animate({
				transform: 'r0,35,35'
			}, 200);
		}
	);


});