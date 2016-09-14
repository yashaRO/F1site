$(document).ready(function() {
	$('th').mouseenter(function() {
		$(this).fadeTo('fast',.7)
	});
	$('th').mouseleave(function() {
		$(this).fadeTo('fast',1)
	});
})