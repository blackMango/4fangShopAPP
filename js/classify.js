// JavaScript Document

$(function(){
	$("#section > .menu > .content").eq(1).show().siblings().hide();
	$("#section > #aside li").click(
		function (){
			$(this).addClass("current").siblings().removeClass("current");
			$("#section > .menu > .content").eq($(this).index()).show().siblings().hide();
		}
	);
})
