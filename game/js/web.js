function FishWeb(type){
    this.x = 0;
    this.y = 0;
    this.scale = 1;
    this.type = type;
}
FishWeb.prototype.draw = function (gd) {
    gd.save();
    gd.translate(this.x,this.y);
    gd.scale(this.scale,this.scale);
    switch (this.type){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            gd.drawImage(JSON['web'],
                22,22,200,200,
                -200/2,-200/2,200,200
            );
            gd.restore();
            break;
    }
};
