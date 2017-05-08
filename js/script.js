$(document).ready(function(){
	$('#nav-toggle').on('click', function(){
		$(this).next('nav').slideToggle();
	});
});