
	$arrow = $("#arrow");
	
	$arrow.on("click", function() {
		$("#header").slideToggle(750);
		$arrow.toggleClass("rotated");
	});
	