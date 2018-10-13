$(document).ready(function() {
	
	$(".k-option.active").click(function() {
	
		$(".k-option").removeClass("current");
		$(this).addClass("current");
		
		var index = $(this).index() + 1;
		
		$(".k-content").removeClass("current");
		$(".k-content:nth-child(" + index + ")").addClass("current");

	});
	
	$("#site-upload").on("change", function() {
		
		if($(this).val().length > 0) {
			
			$(".upload-button").text($(this).val().split("\\").pop());
			$(".publish-button, .cancel-button").removeClass("disabled");
			$(".publish-button, .cancel-button").addClass("material");
			
		}
		
	});
	
	$(".cancel-button").click(function() {
		
		$("#site-upload").val(null);
		$(".upload-button").text("Upload your website (.zip)");
		$(".publish-button, .cancel-button").removeClass("material");
		$(".publish-button, .cancel-button").addClass("disabled");
		$(".k-website").empty();
		$(".k-menu .button:nth-child(1) .k-status").removeClass("up");
		$(".k-menu .button:nth-child(1) .k-status").addClass("waiting");
		
	});
	
	$(".publish-button").click(function() {
		
		if(!($(this).hasClass("disabled"))) {
			
			$(".k-menu .button:nth-child(1) .k-status").removeClass("waiting");
			$(".k-menu .button:nth-child(1) .k-status").addClass("up");
			
		}
		
	});
	
	window.maxRam = 16;
	window.maxNet = 50;
	
	$(function() {
		
		$(".slider.cpu").slider({
			
			range: "min",
			value: 0,
			min: 0,
			max: 100,
			step: 1,
			slide: function(event, ui) {
				$("#cpu-amount").val(ui.value + "%");
			}
			
		});
		
		$("#cpu-amount").val($(".slider.cpu").slider("value") + "%");
		
	});
	
	$(function() {
		
		$(".slider.ram").slider({
			
			range: "min",
			value: 0,
			min: 0,
			max: window.maxRam,
			step: 1,
			slide: function(event, ui) {
				$("#ram-amount").val(ui.value + "GB");
			}
			
		});
		
		$("#ram-amount").val($(".slider.ram").slider("value") + "GB");
		
	});
	
	$(function() {
		
		$(".slider.network").slider({
			
			range: "min",
			value: 0,
			min: 0,
			max: window.maxNet,
			step: 1,
			slide: function(event, ui) {
				$("#network-amount").val(ui.value + "Mbps");
			}
			
		});
		
		$("#network-amount").val($(".slider.network").slider("value") + "Mbps");
		
	});
	
	window.nodeStatus = false;
	
	$(".node-slider").click(function() {
		
		if(window.nodeStatus === false) {
			/*$(".node-status").addClass("color");*/
			$(".node-status").addClass("starting");
			$(".node-status").text("Starting...");
			window.nodeStatus = true;
			$(".k-menu .button:nth-child(2) .k-status").removeClass("waiting");
			$(".k-menu .button:nth-child(2) .k-status").addClass("up");
		} else {
			/*$(".node-status").removeClass("color");*/
			$(".node-status").removeClass("starting");
			$(".node-status").text("OFF");
			window.nodeStatus = false;
			$(".k-menu .button:nth-child(2) .k-status").removeClass("up");
			$(".k-menu .button:nth-child(2) .k-status").addClass("waiting");
		}
		
	});

});