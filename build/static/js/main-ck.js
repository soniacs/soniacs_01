// COLOR VARIABLES
var white="#fff",lightGray="#ccc",darkBlue="#14212F",yellow="#F0AA42",green="#79B7A8",blue="#A5D9F2",pink="#F65D54",orange="#E37459";$(document).ready(function(){function e(e){var t=(new Date(Date.parse(e))).toLocaleString();return t.substr(0,8)}$("#last-tweet").hide();$(".home-link").hover(function(){$(".pink").fadeIn(400);$(".yellow").fadeIn(800);$(".green").fadeIn(1200);$(".blue").fadeIn(1600)},function(){$(".blue").fadeOut(300);$(".green").fadeOut(600);$(".yellow").fadeOut(900);$(".pink").fadeOut(1200)});$.getJSON("https://api.twitter.com/1/statuses/user_timeline/soniacsoares.json?count=1&include_rts=1&callback=?",function(t){$("#last-tweet").html("<p>"+t[0].text+" <strong>"+e(t[0].created_at)+"</strong></p>")});$(".twitter").hover(function(){$("#last-tweet").fadeIn(600)},function(){$("#last-tweet").fadeOut(200)})});