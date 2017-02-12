'use strict'
window.onload=onscroll=function(){
	var aLi=document.getElementsByTagName('li');
	var aA=document.getElementsByTagName('a');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var oH=document.documentElement.clientHeight;
	//alert(aA.length)
	for(var i=0;i<aLi.length;i++){
		//console.log(aLi[i].children)
		if(aLi[i].offsetTop<scrollTop+oH){
			aA[i].style.top=0;
			aA[i].style.opacity=1;
		}else{
			aA[i].style.top='70px';
			aA[i].style.opacity=0.6;
		}
		
	}
}
