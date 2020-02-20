$(document).ready(function(){

	$("#submit").click(function(){

		var name = $("#contactName").val();
		var email = $("#contactEmail").val();
		var info = $("#textArea").val();

		$(".contactName").text(name);
		$(".contactEmail").text(email);
		$(".textArea").text(info);

		$("#output").show();
		alert("Thank you " + name + " for your feedback. We will be in touch via " +email);

	});

	$("#shift1").click(function(){
		$(".img1").toggle();
		$(".txt1").toggle();
	});

	$("#shift2").click(function(){
		$(".img2").toggle();
		$(".txt2").toggle();
	});

	$("#shift3").click(function(){
		$(".img3").toggle();
		$(".txt3").toggle();
	});

	

});
