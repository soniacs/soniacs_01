$(document).ready(function(){function s(e,t){$(e).hover(function(){$(i).text(t)},function(){$(i).text(r)})}function o(e,t){$(e).bind("click",function(e){$("html, body").animate({scrollTop:$(t).offset().top},1e3);e.preventDefault()})}var e=$(window).height(),t=$(".intro .container").height(),n=(e-t)/2.5;$(".intro").height(e).css("padding-top",n);$(".intro p").fitText();var r=$(".intro-text span").text(),i=$(".intro-text span");s(".about-link","I like simple Interfaces.");s(".projects-link","I design and code.");s(".contact-link","Let's get in touch!");s(".scroll-down","(^_^)");o(".scroll-down","#projects");o(".about-link","#about");o(".projects-link","#projects");o("#home-link",".intro");var u=$(".site-header");u.hide();$("#intro-nav").waypoint(function(e){e==="down"?u.fadeIn():u.fadeOut()});$(".project").hover(function(){$(this).find(".project-info").fadeIn()},function(){$(this).find(".project-info").fadeOut()});var a=Raphael("projects-icon",70,70),f=a.path("M30,59 C20,58 11,49 10,39 L17,39 L17,30 L10,30 C11,20 20,11 30,10 L30,17 L39,17 L39,10 C49,11 58,20 60,30 L52,30 L52,39 L59,39 C58,49 49,58 39,60 L39,52 L30,52 Z M31,31 L31,39 L39,39 L39,31 Z M31,31").attr({fill:orange,"stroke-width":"0"});$("#projects-icon").hover(function(){f.animate({transform:"r360"},1e3)},function(){f.animate({transform:"r0"},300)});var l=Raphael("about-icon",70,70),c=l.circle(35,35,25).attr({fill:orange,"stroke-width":"0"}),h=l.path("M27,47 C22,45 20,40 20,35 C20,26 26,20 35,20 C43,20 50,26 50,35 C50,40 47,45 42,47 C47,48 50,50 52,52 C47,57 41,60 35,60 C28,60 22,57 17,52 C19,50 22,48 27,47 L27,47 Z M27,47").attr({fill:"#fff","stroke-width":"0"});$("#about-icon").hover(function(){h.animate({transform:"r540,35,35"},500)},function(){h.animate({transform:"r0,35,35"},300)})});