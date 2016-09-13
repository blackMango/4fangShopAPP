// JavaScript Document

$(function(){
	$("#header > #nav a").click(
		function (){
			$(this).addClass("current").siblings().removeClass("current");
		}
	);
})
