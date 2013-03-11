$(document).ready(function() {

	// SET INTRO HEIGHT
	var screen_height = $(window).height();
	$('.home-intro').height( screen_height );

	// SVG INTRO GRAPHICS
	var r = 75; //outer circle raius
	var d = r*2; //outer circle diametre
	var a = 50; //arrow size
	var aX = a/2;
	var aY = d - a;
	var inner = 20; //inner line size
	var difference = 0.7 //difference between outer and inner circle

	//design variables
	var dA = r*difference;
	var dB = dA -inner;

	//intro variables
	var iA = r-inner/2;
	var iB = dA*2;
	var iC = (d-iB)/2;

	//build variables
	var bA = iC;
	var bB = d - bA;
	var bC = bA + inner;
	var bD = bB - inner;

	function style(element, color){
		return element.attr({"fill":color,"stroke-width": 0});
	}
	function draw_outer_circle(element, r){
		return style(element.circle(r, r, r), white);
	};

	// Design
	var design = Raphael('design', d, d);
	var design_outer = draw_outer_circle(design, r);
	var design_inner1 = style(design.circle(r, r, dA), lightGray);
	var design_inner2 = style(design.circle(r, r, dB), white);

	// Intro
	var intro = Raphael('intro', d, d);
	var intro_outer = draw_outer_circle(intro, r);
	var arrow = style(intro.path("M0,"+d+"L"+aX+","+aY+"L-"+aX+","+aY+"L0,"+d+"Z").transform("r45,0,"+d), white);
	var intro_vertical = style(intro.rect(iA, iC, 20, iB), lightGray);
	var intro_horizontal = style(intro.rect(iC, iA, iB, 20), lightGray);

	// Build
	var build = Raphael('build', d, d);
	var build_outer = draw_outer_circle(build, r);
	var build_inner1 = style(build.path("M"+r+','+bA+'L'+bB+','+r+'L'+r+','+bB+'L'+bA+','+r+','+r+bA+'Z'), lightGray);
	var build_inner2 = style(build.path("M"+r+','+bC+'L'+bD+','+r+'L'+r+','+bD+'L'+bC+','+r+','+r+bC+'Z'), white);


	// SVG ABOUT GRAPHICS
	var r = 25; //raius
	var d = r*2; //diametre

	var about = Raphael('about', 50, 50);
	var circle = about.circle(25, 25, 25).attr({"fill":yellow,"stroke-width": 0});

});