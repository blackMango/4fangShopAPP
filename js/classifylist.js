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
	
	var bodywid = document.body.clientWidth;
	var bodywid = window.screen.width;
	if(bodywid < 622){
		var imgwid = bodywid * 0.49;
	}
	else if(bodywid >= 622){
		var imgwid = bodywid * 0.2425;
	}
	$("#section > .list figure .img").css({"height":imgwid});
	//var imgheight = $("#section > .list figure .img").height();
	//alert(imgwid + " " + imgheight);

})
