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
			if(toppos > 0){
				$("#header .search").addClass("searfix");	
			}else if(toppos == 0){
				$("#header .search").removeClass("searfix");
			}
			if(toppos > 30){
				$("#rec").fadeIn();
			}else if(toppos == 0){
				$("#rec").fadeOut();
			}
		}
	);
})
