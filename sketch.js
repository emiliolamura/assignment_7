var capture;
var x1
var y1
var a1
var a2
var a3
var mic



function preload(){
  immagine1 = loadImage("assets/1.png");
  immagine2 = loadImage("assets/2.png");
  immagine3 = loadImage("assets/3.png");
  immagine4 = loadImage("assets/4.png");
  immagine5 = loadImage("assets/5.png");
  immagine6 = loadImage("assets/6.png");
  immagine7 = loadImage("assets/7.png");

}



function setup() {
 createCanvas(500,500)
 capture = createCapture(VIDEO);
 capture.size(640,480);
 capture.hide()
 
 mic = new p5.AudioIn();
 mic.start();

}



function draw() {

 var myImage = capture.loadPixels()
 image(myImage,0,0,500,480)
 filter(THRESHOLD,0.2)
 
 
 
 sensore1(width/2,height/2-120)
 sensore2(width/2-100,height/2-120)
 sensore3(width/2+100,height/2-120)

 noStroke()

 ris = a1+a2+a3


  if (ris == 3) {
  fill(20)
  rect(0,0,width,height)
  image(immagine3,-30,0,500,500);
  var vol = mic.getLevel();
  ellipse(259,214,vol * 100);
}
  
  if (ris == 4) {
  fill(20)
  rect(0,0,width,height)
  image(immagine1,-30,0,500,500)

  var vol = mic.getLevel();
  ellipse(363,298,vol * 100);
}
  
  if (ris == 5) {
  fill(20)
  rect(0,0,width,height)
  image(immagine5,-30,0,500,500)

  var vol = mic.getLevel();
  ellipse(123,297,vol * 100);
}
  
  if (ris == 3+4) {
  fill(20)
  rect(0,0,width,height)
  image(immagine2,-30,0,500,500)

  var vol = mic.getLevel();
  ellipse(333,235,vol * 100);
}
  
  if (ris == 3+5) {
  fill(20)
  rect(0,0,width,height)
  image(immagine4,-30,0,500,500)

  var vol = mic.getLevel();
  ellipse(164,235,vol * 100);
}

  if (ris == 0 || ris == 3+4+5 || ris == 4+5) {
  fill(20)
  rect(0,0,width,height)
  image(immagine6,110,130,290,270); 
}
 

   visuale()
   

   
    noFill()
    stroke(0,100,255)
    rect(385,52,80,4)

    image(immagine7,110,475,280,20); 

}










function sensore1(pos1,pos2,imm,valore){

  var thisX = pos1;
  var thisY = pos2;
  var c1 = get(thisX, thisY)

  fill(c1);
  stroke(0,255,0);
  ellipse(thisX, thisY, 60, 60);

  x1 = c1[0];
  y1 = c1[1];
  var scaled = map(0, x1, 200, y1, 200);
  
  if (c1[0]==0){
  a1 = 3
} else{ a1 = 0 }
  
} 


function sensore2(pos1,pos2,imm,valore){

  var thisX = pos1;
  var thisY = pos2;
  var c2 = get(thisX, thisY)

  fill(c2);
  stroke(0,255,0);
  ellipse(thisX, thisY, 60, 60);

  x1 = c2[0];
  y1 = c2[1];
  var scaled = map(0, x1, 200, y1, 200);
  
  if (c2[0]==0){
  a2 = 4
} else{ a2 = 0 }
  
} 

function sensore3(pos1,pos2,imm){

  var thisX = pos1;
  var thisY = pos2;
  var c3 = get(thisX, thisY)

  fill(c3);
  stroke(0,255,0);
  ellipse(thisX, thisY, 60, 60);

  x1 = c3[0];
  y1 = c3[1];
  var scaled = map(0, x1, 200, y1, 200);
  
  if (c3[0]==0){
  a3 = 5
} else { a3 = 0 }
  
} 

function visuale(){
  push(); 
    translate(capture.width,0); 
    scale(-0.2,0.2); 
    image(capture,760,150); 
    //filter(THRESHOLD,0.2)
  pop();

  
}

