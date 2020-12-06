let rx=100;
let ry=100;
let speed=3.75;
let rw=100;
let rh=125;
let ok=0, verifStart=0, verif2=0;
let vy;
let vx;
let vw=75;
let vh=75;
let nr=0;
let vspeedx, vspeedy;
let tss, tsm;
function setup() {
  createCanvas(windowWidth-10, windowHeight-10);
}

function preload (){
   raton=loadImage('ratoneljoc.png');
   virus=loadImage('jocbacterie.png');
   endScreen=loadImage('ai_castigat3.png');
   startScreen=loadImage('startscreen4.png');
   loseScreen=loadImage('aipierdut.png');
   natura=loadImage('natura.jpg');
   oras=loadImage('oras.jpg');
   spital=loadImage('spital.jpg');
   zero=loadImage('0.png');
   unu=loadImage('1.png');
   doi=loadImage('2.png');
   trei=loadImage('3.png');
   patru=loadImage('4.png');
   cinci=loadImage('5.png');
   sase=loadImage('6.png');
   sapte=loadImage('7.png');
   opt=loadImage('8.png');
   noua=loadImage('9.png');
   zece=loadImage('10.png');
   unspe=loadImage('11.png');
   doispe=loadImage('12.png');
   treispe=loadImage('13.png');
   paispe=loadImage('14.png');
   cinspe=loadImage('15.png');
   saispe=loadImage('16.png');
   saptaspe=loadImage('17.png');
   optaspe=loadImage('18.png');
   nouaspe=loadImage('19.png');
   scor=loadImage('SCOR.png');
}

function draw() {
  if (keyIsDown(13)&&verifStart==0){
    verifStart=1;
    tss=second();
    tsm=minute();
  }
  if (verifStart==1){
    if (nr<19){
      if (nr>12){
        background(spital,width,height);
      }else if (nr>=6) {
        background(oras,width,height);
      }else{
        background(natura,width,height);
      }
      ///text(mouseX + ", " + mouseY, 20, 20);

      ///------------------------------
      ///      RATON MOVEMENT
      ///------------------------------

      if (keyIsDown(83)){
        ry+=speed;
      }
      if (keyIsDown(87)){
        ry-=speed;
      }
      if (keyIsDown(65)){
        rx-=speed;
      }
      if (keyIsDown(68)){
        rx+=speed;
      }
      if (rx>width-rw){
        rx=width-rw;
      }
      if (ry>height-rh){
        ry=height-rh;
      }
      if (ry<0){
        ry=0;
      }
      if (rx<0){
        rx=0;
      }
      image(raton,rx,ry,rw,rh);
      ///------------------------------
      ///            VIRUS
      ///------------------------------
      if (ok==0){
        vx=random(width-vw);
        vy=random(height-vh);
        vspeedx=random(-5,5);
        vspeedy=random(-5,5);
        ok=1;
      }
      vx+=vspeedx;
      vy+=vspeedy;
      if (vx<0){
        vspeedx=-vspeedx;
      }
      if (vy<0){
        vspeedy=-vspeedy;
      }
      if (vy>height-vh){
        vspeedy=-vspeedy;
      }
      if (vx>width-vw){
        vspeedx=-vspeedx;
      }
      image(virus, vx, vy, vw, vh);
      ///------------------------------
      ///         COLLISION
      ///------------------------------
      if (rx+rw>=vx&&rx<=vx+vw&&ry+rh>=vy&&ry<=vy+vh){
        ok=0;
        nr++;
      }
      ///------------------------------
      ///           SCORE
      ///------------------------------
      image(scor,-20,-70,200,200);
      if (nr==0){
        image(zero, 80,-70,200,200);
      }
      if (nr==1){
        image(unu, 80,-70,200,200);
      }
      if (nr==2){
        image(doi, 80,-70,200,200);
      }
      if (nr==3){
        image(trei, 80,-70,200,200);
      }
      if (nr==4){
        image(patru, 80,-70,200,200);
      }
      if (nr==5){
        image(cinci, 80,-70,200,200);
      }
      if (nr==6){
        image(sase, 80,-70,200,200);
      }
      if (nr==7){
        image(sapte, 80,-70,200,200);
      }
      if (nr==8){
        image(opt, 80,-70,200,200);
      }
      if (nr==9){
        image(noua, 80,-70,200,200);
      }
      if (nr==10){
        image(zece, 80,-70,200,200);
      }
      if (nr==11){
        image(unspe, 80,-70,200,200);
      }
      if (nr==12){
        image(doispe, 80,-70,200,200);
      }
      if (nr==13){
        image(treispe, 80,-70,200,200);
      }
      if (nr==14){
        image(paispe, 80,-70,200,200);
      }
      if (nr==15){
        image(cinspe, 80,-70,200,200);
      }
      if (nr==16){
        image(saispe, 80,-70,200,200);
      }
      if (nr==17){
        image(saptaspe, 80,-70,200,200);
      }
      if (nr==18){
        image(optaspe, 80,-70,200,200);
      }
      if (nr==19){
        image(nouaspe, 80,-70,200,200);
      }
    }
    if (nr<19&&tss==second()&&tsm!=minute()){
      verif2=1;
    }
    if (verif2==1){
      background(loseScreen,width,height);
      if (keyIsDown(13)){
        rx=100;
        ry=100;
        ok=0;
        nr=0;
        verif2=0;
        tss=second();
        tsm=minute();
      }
    }
    if (nr>=19&&verif2==0){
      background(endScreen, width,height);
      image(scor,-20,-70,200,200);
      image(nouaspe, 80,-70,200,200);
      if (keyIsDown(13)){
        rx=100;
        ry=100;
        ok=0;
        nr=0;
        tss=second();
        tsm=minute();
      }
    }

  }
  else{
    background(startScreen,width,height);
  }

}
