var JSON = {};// {'fish1':oImg1,'fish2',oImg2}
function loadImage(arr,fnSucc){
    var count = 0;
    for(var i = 0;i<arr.length;i++){
        var oImg = new Image();
        (function(index){
            oImg.onload = function(){
                JSON[arr[index]] = this;
                count++;
                if(count == arr.length){
                    fnSucc&&fnSucc();
                }
            };
        })(i);
        oImg.src ='img/'+arr[i]+'.png';
    }
}
function d2a(n){return Math.PI*n/180;}
function a2d(n){return 180*n/Math.PI;}
function rnd(m,n){return parseInt(m+Math.random()*(n-m))};