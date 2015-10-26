$(document).ready(function() {
	$(".passo1").click(function(event) {
		$("#passo1").css({"color":"white", "background-color":"#ff863b", "transitions":"0.7s"});
		$("#passo2").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});
		$("#passo3").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});

		$("#imgPasso1").fadeIn("slow");
		$("#imgPasso2").css({"display":"none"});
		$("#imgPasso3").css({"display":"none"});
	});

	$(".passo2").click(function(event) {
		$("#passo2").css({"color":"white", "background-color":"#ff863b", "transitions":"0.7s"});
		$("#passo1").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});
		$("#passo3").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});

		$("#imgPasso1").css({"display":"none"});
		$("#imgPasso2").fadeIn("slow");
		$("#imgPasso3").css({"display":"none"});
	});

	$(".passo3").click(function(event) {
		$("#passo3").css({"color":"white", "background-color":"#ff863b", "transitions":"0.7s"});
		$("#passo2").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});
		$("#passo1").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});

		$("#imgPasso1").css({"display":"none"});
		$("#imgPasso2").css({"display":"none"});
		$("#imgPasso3").fadeIn("slow");
	});
});