// JavaScript Document

$(function(){
	$("#rec").click(
		function(){
			$(document).scrollTop(0);
		}
	);
	$(document).scroll(
		function(){
			toppos = $(document).scrollTop();
			if(toppos > 30){
				$("#rec").fadeIn();
			}else if(toppos == 0){
				$("#rec").fadeOut();
			}
		}
	);
})
