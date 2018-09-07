$(document).ready(function() {
	
	$(".k-option.active").click(function() {
	
		$(".k-option").removeClass("current");
		$(this).addClass("current");
		
		var index = $(this).index() + 1;
		
		$(".k-content").removeClass("current");
		$(".k-content:nth-child(" + index + ")").addClass("current");

	});

});