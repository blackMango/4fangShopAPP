// JavaScript Document

$(function(){
	$("#section .photobox .photo:eq(0) img").eq(0).click(
		function(){
			$(this).hide().siblings().show();
		}
	);
	$("#section .photobox .photo:eq(1) img").eq(0).click(
		function(){
			$(this).hide().siblings().show();
			$("#section .photobox .photo:eq(0) img").eq(0).hide().siblings().show();
		}
	);
	$("#section .photobox .photo:eq(2) img").eq(0).click(
		function(){
			$(this).hide().siblings().show();
			$("#section .photobox .photo:eq(0) img").eq(0).hide().siblings().show();
			$("#section .photobox .photo:eq(1) img").eq(0).hide().siblings().show();
		}
	);
	$("#section .photobox .photo:eq(3) img").eq(0).click(
		function(){
			$(this).hide().siblings().show();
			$("#section .photobox .photo:eq(0) img").eq(0).hide().siblings().show();
			$("#section .photobox .photo:eq(1) img").eq(0).hide().siblings().show();
			$("#section .photobox .photo:eq(2) img").eq(0).hide().siblings().show();
		}
	);
	$("#section .photobox .photo:eq(4) img").eq(0).click(
		function(){
			$(this).hide().siblings().show();
			$("#section .photobox .photo:eq(0) img").eq(0).hide().siblings().show();
			$("#section .photobox .photo:eq(1) img").eq(0).hide().siblings().show();
			$("#section .photobox .photo:eq(2) img").eq(0).hide().siblings().show();
			$("#section .photobox .photo:eq(3) img").eq(0).hide().siblings().show();
		}
	);
	
	$("#section .photobox .photo:eq(4) img").eq(1).click(
		function(){
			$(this).show().siblings().hide();
		}
	);
	$("#section .photobox .photo:eq(3) img").eq(1).click(
		function(){
			$(this).show().siblings().hide();
			$("#section .photobox .photo:eq(4) img").eq(1).hide().siblings().show();
		}
	);
	$("#section .photobox .photo:eq(2) img").eq(1).click(
		function(){
			$(this).show().siblings().hide();
			$("#section .photobox .photo:eq(3) img").eq(1).hide().siblings().show();
			$("#section .photobox .photo:eq(4) img").eq(1).hide().siblings().show();
		}
	);
	$("#section .photobox .photo:eq(1) img").eq(1).click(
		function(){
			$(this).show().siblings().hide();
			$("#section .photobox .photo:eq(3) img").eq(1).hide().siblings().show();
			$("#section .photobox .photo:eq(4) img").eq(1).hide().siblings().show();
			$("#section .photobox .photo:eq(2) img").eq(1).hide().siblings().show();
		}
	);
	$("#section .photobox .photo:eq(0) img").eq(1).click(
		function(){
			$(this).show().siblings().hide();
			$("#section .photobox .photo:eq(4) img").eq(1).hide().siblings().show();
			$("#section .photobox .photo:eq(1) img").eq(1).hide().siblings().show();
			$("#section .photobox .photo:eq(2) img").eq(1).hide().siblings().show();
			$("#section .photobox .photo:eq(3) img").eq(1).hide().siblings().show();
		}
	);
})
