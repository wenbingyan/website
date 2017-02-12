
$(function(){
		 $('.word').stop().animate({width:1100},{duration:9000});	
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
			aSpan[i].style.transform='perspective(800px)  translate('+l+'px,'+t+'px) rotateX('+rnd(-180,180)+'deg) rotateY('+rnd(-180,180)+'deg) scale(1.4)';
			aSpan[i].style.opacity=0;
		}
	};
	oMe.onmouseleave=function(){
        for(var i = 0;i<aSpan.length;i++){
            aSpan[i].style.transition = '1s all ease';
            aSpan[i].style.transform = 'perspective(800px)  translate(0,0) rotateX(0deg) rotateY(0deg) scale(1)';
            aSpan[i].style.opacity = 1;
        }
	};
};
function rnd(m,n){
	return parseInt(m+Math.random()*(n-m))
}
