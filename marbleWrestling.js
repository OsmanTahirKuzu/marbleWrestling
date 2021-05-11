var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images


var misket = new Image();
var misket1 = new Image();
var bg = new Image();

misket.src = "images/misket.png";
misket1.src = "images/misket1.png";
bg.src = "images/bg.png";

// some variables(değişecek)

var x1 = 200 ;
var x2 = 200 ;
var y1 = 125;
var y2 = 275;
var r1, r2 = 12;

var score = 0;
var Score2 = 0;

document.addEventListener("keydown",hareket);
function hareket(tus) {

    switch(tus.keyCode) {
        //p1 sol
        case 37:

            x1-=10;
            
            break;
        //p1 yukarı
        case 38:

            y1-=10;
            
            break;
        //p1 sağ
        case 39:

            x1+=10;
            
            break;
        //p1 aşağı
        case 40:

            y1+=10;
            
            break;
        //p2 sol
        case 65:
            x2-=10;
            
            break;
        //p2 yukarı
        case 87:
            y2-=10;
            
            break;
        //p2 sağ
        case 68:

            x2+=10;
            
            break;
        //p2 aşağı
        case 83:

            y2+=10;
            
        break;

    }
}
function carpisma(x1,x2,){
    // detect collision
    var dx = x1 - x2;
    var dy = y1 - y2;
    var mesafe = Math.sqrt(dx * dx + dy * dy);

    if (mesafe < r1 + r2) {
        x1+=100;
        x2+=100;
    }
}
// draw images
function draw(){
    
    ctx.drawImage(bg,100,100);
    carpisma();
    

    ctx.drawImage(misket,x1,y1);
    ctx.drawImage(misket1,x2,y2);

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("P1 : "+score,10,cvs.height-20);
    ctx.fillText("P2 : "+Score2,425,cvs.height-20);
    requestAnimationFrame(draw);
    
}

draw();
