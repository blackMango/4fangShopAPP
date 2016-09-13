// JavaScript Document

$(function(){
	$("#section #button").click(
		function(){
			$(".paypass").fadeIn();
			$("#bg").fadeIn();
			$("body").addClass("fix");
		}
	);
	$(".paypass .money .close").click(
		function(){
			$("#bg").fadeOut();
			$(".paypass").fadeOut();
			$("body").removeClass("fix");
		}
	);
	$(".paypass .card").click(
		function(){
			$(".paypass").fadeOut();
			$(".selectcard").fadeIn();
			$("#bg").fadeIn();
			$("body").addClass("fix");
		}
	);
	
	$(".selectcard .card figcaption").click(
		function(){
			$(".selectcard").fadeOut();
			$(".paypass").fadeIn();
			$("#bg").fadeIn();
			$("body").addClass("fix");
			$(".paypass .card").eq(($(this).parent().index()-1)/2).show().siblings(".card").hide();
			/*alert(($(this).parent().index()-1)/2);*/
		}
	);
	$(".paypass .card").eq(0).hide();
	
	
	
	onload = function(){
                var txts = wrap.getElementsByTagName("input");
                for(var i = 0; i<txts.length;i++){
                    var t = txts[i];
                    t.index = i;
                    t.setAttribute("readonly", true);
                    t.onkeyup=function(){
                        this.value=this.value.replace(/^(.).*$/,'$1');
                        var next = this.index + 1;
                        if(next > txts.length - 1) return;
                        txts[next].removeAttribute("readonly");
                        txts[next].focus();
                    }
                }
                txts[0].removeAttribute("readonly");
            }
})
