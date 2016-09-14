// JavaScript Document

$(function(){

	$(".footmenu > figcaption figure").click(
		function(){
			$(this).addClass("currentlogo").siblings().removeClass("currentlogo");
			$(".footmenu > hgroup h1").eq($(this).index()).addClass("color").siblings().removeClass("color");
		}
	);
	
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
	
	/*var t = setInterval(
		function(){
			$("#section > .photo .photobox .img").animate({marginLeft:'-100%'},1000,function(){
				$("#section > .photo .photobox .img img:last").after($("#section > .photo .photobox .img img:first"));
				$("#section > .photo .photobox .img").css({marginLeft:0});
			});
		},2000
	);*/
/*	
	$("#section > .photo .photobox .img img").eq(0).show().siblings().hide();
	$("#section > .photo .ctrlboxsmall .ctrl").click(
		function(){
			$(this).addClass("current").siblings().removeClass("current");
			$("#section > .photo .photobox .img img").eq($(this).index()).show().siblings().hide();
		}
	);
*/	

	$("#section > #nav a").click(
		function(){
			$(this).addClass("curcolor").siblings().removeClass("curcolor");
		}
	);
	
	
	/*document.title = n;*/
	var n = $("section > .photo").height() + $("#section > .namebox").height() + $("#section > .pay").height() + $("#section > .num").height()+$("#section > hgroup").height() + $("#section > .ad").height() + $("#section > hr").height() + 20;
	var toppos = 0;
	$(document).scroll(
		function(){
			toppos=$(document).scrollTop();
			if(toppos > n){
				$("#section > #nav").addClass("fix");
			}else{
				$("#section > #nav").removeClass("fix");
			}
		}
	);
		
	$("#section > .say .nav dl").click(
		function(){
			$(this).addClass("curcol").siblings().removeClass("curcol");
		}
	);
	
	$(".joingood > .colorclassify span").click(
		function(){
			$(this).toggleClass("bgcolor").siblings().removeClass("bgcolor");
		}
	);
	$(".footnav .butbox .button").click(
		function(){
			$(".joingood").animate({marginBottom:0},800);
			$("#bg").fadeIn();
			$("body").addClass("fix");
		}
	);
	$(".joingood img").click(
		function(){
			$(".joingood").animate({marginBottom:-350},800);
			$("#bg").fadeOut();
			$("body").removeClass("fix");
		}
	);
/*	
	var imgNum = $("#section > .photobox img ").length;
	var docuWid = $(window).width();
	var imgBoxWid = docuWid*imgNum + 'px';
	//console.log(docuWid);
	
	$("#section > .photobox .swipe .img").css({"width":imgBoxWid});
	$("#section > .photobox .swipe .img .imgbox").css({"width":docuWid});
	var imgMarWid = docuWid*0.05 + 'px';

	$("#section > .photobox .img img ").css({"width":imgWid,"margin":"20px" + " " + imgMarWid});

	var slider = {
		//判断设备是否支持touch事件
		touch:('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
		slider:document.getElementById('slider'),
	
		//事件
		events:{
			index:0,     //显示元素的索引
			slider:this.slider,     //this为slider对象
			icons:document.getElementById('icons'),
			icon:this.icons.getElementsByClassName('ctrl'),
			handleEvent:function(event){
				var self = this;     //this指events对象
				if(event.type == 'touchstart'){
					self.start(event);
				}else if(event.type == 'touchmove'){
					self.move(event);
				}else if(event.type == 'touchend'){
					self.end(event);
				}
			},
			//滑动开始
			start:function(event){
				var touch = event.targetTouches[0];     //touches数组对象获得屏幕上所有的touch，取第一个touch
				
				startPos = {x:touch.pageX,y:touch.pageY,time:+new Date};    //取第一个touch的坐标值
				isScrolling = 0;   //这个参数判断是垂直滚动还是水平滚动
				document.getElementById('slider').addEventListener('touchmove',this,false);
				document.getElementById('slider').addEventListener('touchend',this,false);
			},
			//移动
			move:function(event){
				//当屏幕有多个touch或者页面被缩放过，就不执行move操作
				if(event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
				var touch = event.targetTouches[0];
				endPos = {x:touch.pageX - startPos.x,y:touch.pageY - startPos.y};
					event.preventDefault();      //阻止触摸事件的默认行为，即阻止滚屏
					document.getElementById('slider').className = 'img';
					document.getElementById('slider').style.left = -this.index*docuWid + endPos.x + 'px';
			},
			//滑动释放
			end:function(event){
				 var duration = +new Date - startPos.time;    //滑动的持续时间
				if(isScrolling === 0){    //当为水平滚动时
				
					this.icon[this.index].className = 'ctrl';
					if(Number(duration) > 10){     
						//判断是左移还是右移，当偏移量大于10时执行
						if(endPos.x > 10){
							if(this.index !== 0) this.index -= 1;
						}else if(endPos.x < -10){
							if(this.index !== this.icon.length-1) this.index += 1;
						}
					}
					this.icon[this.index].className = 'ctrl current';
					document.getElementById('slider').className = 'img img-anim';
					document.getElementById('slider').style.left = -this.index*docuWid + 'px';
				}
				//解绑事件
				document.getElementById('slider').removeEventListener('touchmove',this,false);
				document.getElementById('slider').removeEventListener('touchend',this,false); 
			}
		},
		
		//初始化
		init:function(){
			var self = this;     //this指slider对象
			if(!!self.touch) self.slider.addEventListener('touchstart',self.events,false);    //addEventListener第二个参数可以传一个对象，会调用该对象的handleEvent属性
		}
	};
	
	slider.init();
*/

	var ctrls = document.getElementById('icons').getElementsByClassName('ctrl');
	
	var banner = Swipe(
		document.getElementById('slider'),{
		continuous: true,
		disableScroll:false,
		callback: function(pos) {
			var i = ctrls.length;
			while (i--) {
			  ctrls[i].className = 'ctrl';
			}
			ctrls[pos].className = 'ctrl current';
		}
		alert(ctrls);
	});


})
