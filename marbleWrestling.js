var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images


var misket = new Image();
var misket1 = new Image();
var bg = new Image();

misket.src = "images/misket11.png";
misket1.src = "images/misket22.png";
bg.src = "images/bg.png";

// some variables

var x1 = 225 ;
var x2 = 225 ;
var y1 = 125;
var y2 = 325;
var r1, r2 = 25;

var dx = x1 - x2;
var dy = y1 - y2;
var mesafe = Math.sqrt(dx * dx + dy * dy);

var score1 = 0;
var score2 = 0;

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
function carpismaEylemi() {
    
    x1 -= dx + 50; 
    y1 -= dy + 50;
    x2 += dx + 50;
    y2 += dy + 50;
    
}

function gameOver(){
   
    //skor kazanılma yeri
    if(x1<100 || x1>350 || y1>350 || y1<100){
        score2++;
        x1 = 225 ;
        x2 = 225 ;
        y1 = 125;
        y2 = 325;
    }
    else if(x2<100 || x2>350 || y2>350 || y2<100){
        score1++;
        x1 = 225 ;
        x2 = 225 ;    
        y1 = 125; 
        y2 = 325;    
    }
    
    if(score1 == 3 || score2 == 3){
        if(score1 ==3){
            alert("Kazanan 1. oyuncu Skor: "+score1+" "+score2);
            location.reload(); // reload the page
        }
           
        else if(score2 == 3){
            alert("Kazanan 2. oyuncu Skor: "+score1+" "+score2);
            location.reload(); // reload the page
        }
    }
}
// draw images
function draw(){
    
    ctx.drawImage(bg,100,100);
    ctx.drawImage(misket,x1,y1);
    ctx.drawImage(misket1,x2,y2);

    if(score1 < 3 && score2 < 3){
        gameOver();
    }

    if(mesafe < r1 + r2){
        carpismaEylemi();
    }

    requestAnimationFrame(draw); 
}
draw();
