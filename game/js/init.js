window.onload = function(){
    var oC = document.getElementById('c1');
    var gd = oC.getContext('2d');
    var out = 50;
    var rule =0.05;
    var direction = [-out,out];
    loadImage(resource,function(){
        //存炮弹
        var arrBullet = [];
        //存鱼
        var arrFish = [];
        //存金币
        var arrCoin = [];
        //存死鱼
        var arrDieFish = [];
        //存渔网
        var arrWeb = [];
        var c = new Cannon(7);
        setInterval(function(){
            gd.clearRect(0,0,oC.width,oC.height);
            //画炮台
            gd.drawImage(JSON['bottom'],
                0,0,765,70,
                0,oC.height - 70,765,70
            );
            //生成
            if(Math.random()<rule){
                //画鱼
                direction.sort(function(){
                    return Math.random() - 0.5;
                });

                if(direction[0]<0){
                    var f1 = new Fish(rnd(1,6));
                    f1.x = 0 - out;
                    f1.y = rnd(out,oC.height-out);
                    f1.rotate = rnd(-45,45);
                    arrFish.push(f1);
                }else{
                    var f1 = new Fish(rnd(1,6));
                    f1.x = oC.width + out;
                    f1.y = rnd(out,oC.height-out);
                    f1.rotate = rnd(135,225);
                    arrFish.push(f1);
                }
            }
            //画鱼
            for(var i = 0;i<arrFish.length;i++){
                arrFish[i].draw(gd);
            }
            //画炮
            c.draw(gd);
            //2.画炮弹
            for(var i = 0;i<arrBullet.length;i++){
                arrBullet[i].draw(gd);
            }
            //画金币
            for(var i = 0;i<arrCoin.length;i++){
                arrCoin[i].draw(gd);
            }
            //画死鱼
            for(var i = 0;i<arrDieFish.length;i++){
                arrDieFish[i].draw(gd);
            }
            //画渔网
            for(var i = 0;i<arrWeb.length;i++){
                arrWeb[i].draw(gd);
                arrWeb[i].scale+=0.01;
                if(arrWeb[i].scale>=1.2){
                    arrWeb.splice(i,1);
                    i--;
                }
            }

            //炮弹优化
            for(var i = 0;i<arrBullet.length;i++){
                if(arrBullet[i].x<0-out||arrBullet[i].x>oC.width+out||arrBullet[i].y<0-out||arrBullet[i].y>oC.height+out){
                    arrBullet.splice(i,1);
                    i--;
                }
            }
            //鱼优化
            for(var i = 0;i<arrFish.length;i++){
                if(arrFish[i].x<0-out||arrFish[i].x>oC.width+out||arrFish[i].y<0-out||arrFish[i].y>oC.height+out){
                    arrFish.splice(i,1);
                    i--;
                }
            }
            //碰撞检测
            for(var i = 0;i<arrFish.length;i++){
                for(var j = 0;j<arrBullet.length;j++){
                    if(arrFish[i].isIn(arrBullet[j].x,arrBullet[j].y)){
                        var type = arrFish[i].type;
                        var x = arrFish[i].x;
                        var y = arrFish[i].y;
                        var rotate = arrFish[i].rotate;
                        //干掉子弹
                        arrBullet.splice(j,1);
                        j--;
                        //干掉鱼
                        arrFish.splice(i,1);
                        i--;

                        //生成金币
                        var coin = new Coin(type);
                        coin.x = x;
                        coin.y = y;
                        coin.playSong();
                        arrCoin.push(coin);
                        //生成死鱼
                        var dieFish = new DieFish(type);
                        dieFish.x = x;
                        dieFish.y = y;
                        dieFish.rotate = rotate;
                        arrDieFish.push(dieFish);
                        setTimeout(function(){
                            arrDieFish.shift();
                        },1000);
                        var fishWeb = new FishWeb(type);
                        fishWeb.x = x;
                        fishWeb.y = y;
                        fishWeb.type = type;
                        arrWeb.push(fishWeb);




                    }
                }

            }

        },16);
        //点击
        oC.onclick = function(ev){
            var oA = new Audio();
            oA.src = 'snd/cannon.mp3';
            oA.play();
            //发射状态
            c.emitChange();
            //角度
            var x = ev.clientX - c.x - oC.offsetLeft;
            var y = c.y - (ev.clientY - oC.offsetTop);
            var d = 90 - a2d(Math.atan2(y,x));
            c.rotate = d;
            //1.造炮弹
            var bullet = new Bullet(c.type);
            bullet.x = c.x;
            bullet.y = c.y;
            bullet.rotate = c.rotate;
            arrBullet.push(bullet);
        };
    });
};
