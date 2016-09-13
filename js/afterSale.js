// JavaScript Document


$(function (){
	$("#section .backbox p").click(function(){
		$(this).addClass("currentColor").siblings().removeClass("currentColor");
	});
	$("#backGoods").click(function(){
		$("#section .apllyEvidence").show();
	});
	$("#backMoney").click(function(){
		$("#section .apllyEvidence").hide();
	});
})





