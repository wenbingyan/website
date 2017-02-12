
$(function(){
	 $('.word').stop().animate({width:1100},{duration:9000});
	 $('.menu-btn').on('click',function(){
	 	if($('.m-content').css('display')=='block'){
	 		$('.m-content').stop().animate({opacity:0},{duration:800,complete:function(){
	 			$('.m-content').css('display','none');
	 		}});
	 		
	 		$('.menu-btn .third').css('transform','translateX(0px)');
		 	$('.menu-btn .first').css({'transform':'rotate(0deg)','transform-origin':'left center'});
		 	$('.menu-btn .second').css({'transform':'rotate(0deg)','transform-origin':'left center'});
	 		
	 	}else{	 				
	 		$('.m-content').css('display','block');
	 		$('.m-content').stop().animate({opacity:1},{duration:800});
	 		
	 		$('.menu-btn .third').css('transform','translateX(-40px)');
		 	$('.menu-btn .first').css({'transform':'rotate(37deg)','transform-origin':'left center'});
		 	$('.menu-btn .second').css({'transform':'rotate(-37deg)','transform-origin':'left center'});
	 		
	 	}
	 	
	 })
	 $('.m-nav li').on('mouseenter',function(){
	 	$(this).children('a').children('div').stop().animate({top:'60%',width:50,opacity:1});
	 	$(this).children('a').children('ul').children('li').stop().animate({top:-50});
	 	$(this).children('a').children('em').stop().animate({opacity:0.1});
	 })	
	 $('.m-nav li').on('mouseleave',function(){
	 	$(this).children('a').children('div').stop().animate({top:'75%',width:20,opacity:0});
	 	$(this).children('a').children('ul').children('li').stop().animate({top:0});
	 	$(this).children('a').children('em').stop().animate({opacity:0.5});
	 })	
 })
//Me
window.onload=function(){
	var oMe=document.getElementById('me');
	var R=10;//列
	var C=10;//行
	for (var c=0;c<C;c++) {
		for(var r=0;r<R;r++){
			var oSpan=document.createElement('span');
			oMe.appendChild(oSpan);
			var W=oMe.offsetWidth/R;
			var H=oMe.offsetHeight/C;
			oSpan.style.width=W+'px';
			oSpan.style.height=H+'px';
			oSpan.style.left=W*r+'px';
			oSpan.style.top=H*c+'px';
			oSpan.style.backgroundPosition=-oSpan.offsetLeft+'px -'+oSpan.offsetTop+'px';
		}
	}
	var aSpan=oMe.children;
	oMe.onmouseenter=function(){
		for(var i=0; i<aSpan.length;i++){
			var l=aSpan[i].offsetLeft+aSpan[i].offsetWidth/2-oMe.offsetWidth/2;
			var t=aSpan[i].offsetTop+aSpan[i].offsetHeight/2-oMe.offsetHeight/2;
			aSpan[i].style.transition='1s all ease';
			aSpan[i].style.transform='perspective(800px)  translate('+l+'px,'+t+'px) translateZ('+rnd(-300,300)+'px) scale(1)';
			
		}
	};
	oMe.onmouseleave=function(){
		for(var i = 0;i<aSpan.length;i++){
            aSpan[i].style.transition = '1s all ease';
            aSpan[i].style.transform = 'perspective(800px)  translate(0,0) translateZ(0px) scale(1)';
            aSpan[i].style.opacity = 1;
        }    
	};
};
function rnd(m,n){
	return parseInt(m+Math.random()*(n-m))
}
