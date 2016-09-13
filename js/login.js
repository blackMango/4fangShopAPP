// JavaScript Document

$(function(){
	$("#header > #nav ul li").click(
		function(){
			$(this).addClass("current").siblings().removeClass("current");
			$("#section > .toggle .tog").eq($(this).index()).show().siblings().hide();
		}
	);
	$("#section > .toggle .tog .password img").click(
		function(){
			$(this).hide().siblings().show();
		}
	);
	$("#section > .password .ctrlbox .ctrl").click(
		function(){
			$(this).hide().siblings().show();
			$("#section > .password .ctrlbox").toggleClass("bg");
		}
	);
	
	$("#section > .pro p ").click(
		function(){
			$(".problem").animate({marginBottom:0},800);
			$("#bg").fadeIn();
			$("body").addClass("fix");
		}
	);
	
	$(".problem span").click(
		function(){
			$(".problem").animate({marginBottom:-220},800);
			$("#bg").fadeOut();
			$("body").removeClass("fix");
		}
	);
})
