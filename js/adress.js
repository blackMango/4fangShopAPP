// JavaScript Document

$(function(){
	$("#section #adress").click(
		function(){
			$(this).addClass("border").siblings().removeClass("border");
		}
	);
})
