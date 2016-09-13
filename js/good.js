// JavaScript Document

$(function(){
	/*$(".footmenu > figcaption figure").click(
		function(){
			$(this).addClass("currentlogo").siblings().removeClass("currentlogo");
			$(".footmenu > hgroup a").eq($(this).index()).addClass("color").siblings().removeClass("color");
		}
	);*/
	
	$("#section > .shopbox:eq(0) hgroup > h5:nth-child(3)").click(
		function(){
			$("#section > .shopbox:eq(0) figure > .delimg").toggle();
			$("#section > .shopbox:eq(0) hgroup > h5:nth-child(4)").toggle();
		}
	);
	$("#section > .shopbox:eq(1) hgroup > h5:nth-child(3)").click(
		function(){
			$("#section > .shopbox:eq(1) figure > .delimg").toggle();
			$("#section > .shopbox:eq(1) hgroup > h5:nth-child(4)").toggle();
		}
	);
	$("#section > .shopbox:eq(2) hgroup > h5:nth-child(3)").click(
		function(){
			$("#section > .shopbox:eq(2) figure > .delimg").toggle();
			$("#section > .shopbox:eq(2) hgroup > h5:nth-child(4)").toggle();
		}
	);
})
