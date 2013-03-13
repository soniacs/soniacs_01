// COLOR VARIABLES
var white = "#fff"
var lightGray = "#ccc";
var darkBlue = "#14212F";
var yellow = "#F0AA42";
var green = "#79B7A8";
var blue = "#A5D9F2";
var pink = "#F65D54";

$(document).ready(function() {
	$('#last-tweet').hide();


	// HEADER HOME LINK
	$('.home-link').hover(
		function(){
			$('.pink').fadeIn(400);
			$('.yellow').fadeIn(800);
			$('.green').fadeIn(1200);
			$('.blue').fadeIn(1600);
		},
		function () {
			$('.blue').fadeOut(300);
			$('.green').fadeOut(600);
			$('.yellow').fadeOut(900);
			$('.pink').fadeOut(1200);
		}
	);

	// FOOTER TWITTER TOOLTIP
	// Get Twitter last post
	function parseTwitterDate($stamp){
		// format the Twitter 'created_at' date stamp
		// convert to local string and remove hour and year
		var date = new Date(Date.parse($stamp)).toLocaleString();
		return date.substr(0, 8);
	}
	$.getJSON("https://api.twitter.com/1/statuses/user_timeline/soniacsoares.json?count=1&include_rts=1&callback=?", function(data) {
		$("#last-tweet").html('<p>' + data[0].text + ' <strong>' + parseTwitterDate(data[0].created_at) + '</strong></p>');
	});

	// Display twitter tooltips on hover
	$('.twitter').hover(
		function(){
			$('#last-tweet').fadeIn(600);
		},
		function () {
			$('#last-tweet').fadeOut(200);
		}
	);



});