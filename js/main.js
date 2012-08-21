(function($){

$(document).ready(function(){
	var initWinHeight = window.innerHeight,
		winHeight;
	$("#container").height(initWinHeight);
	$(window).resize(function(){
		winHeight = window.innerHeight;
		$("#container").height(winHeight);
	});
	$("nav a").click(function(){
		$("nav a").removeClass("active");
		$(this).addClass("active");
		return false;
	});
});

})(jQuery);