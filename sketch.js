//Matter JS.. 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
//MatterJS_END

//Var
var Mterrain;
var cam;
var bgImg;
var zpos;
var bodyOne;
var sampleVar;
var SampleVar2;
var rover;
var zpos2;
//Var_END

//Preload
function preload(){
  Mterrain = loadModel("untitled3.obj", true);
  bgImg = loadImage("Mars landscape.jpg");
  rover = loadImage("rover.gif");
}
//Preload_END

function setup() {
   //MatterJS_SETUP
   engine = Engine.create();
   world = engine.world;
   //MatterJS_END

   //Canvas
   createCanvas(displayWidth, displayHeight, WEBGL);
   //sampleVar = createGraphics(500, -500, P2D);

   //CanvasEND
   //Cam
   zpos =0;
   zpos2 =20;
   cam = createCamera();
   //Cam_END

   //DebugModeON
   //debugMode(2100, 10,0 ,0, 0, 200, 0, 0, 0);
   //DebugModeON_END

   //MatterJS
   //bodyOne = new Sample(displayWidth/2-683, displayHeight/2-420, 160, 140);
   //MatterJS_END
}

function draw() {
  //BackgroundColour
  background(10.0);
  //BackgroundColour_END

  //MatterJS
  //bodyOne.display();
  //MatterJS_END


  //sampleVar.background("WHITE");
  //image(sampleVar, 250, 250, 250, 250);
  //BG
  // push();
  // if(frameCount%2===0 && frameCount<488){
  //   zpos = zpos -2.7;
  // }
  // texture(bgImg);
  // translate(0,0, zpos);
  // plane(displayWidth, displayHeight);
  // pop();
  //BG_END

  //Smooth
  smooth();
  //Smooth_END
  
  //OrbitalControl
  orbitControl(1,1,1);
  //OrbitalControl_END

  //Mterrain
  scale(6);
  translate(0,0,50);
  model(Mterrain);
  stroke(255);
  fill(255, 102, 94); 
  //Mterrain_END

  if(frameCount%2===0){
    zpos2= zpos2 +0.3;
  }
  push();
  texture(rover);
  noStroke();
  if(frameCount%400===0){
    zpos2=-40;
  }
  translate(0,0, zpos2);
  plane(20, 16);
  pop();

  if(frameCount%400===0){
     cam.setPosition(0,0,300);
  }

  //CameraMovementCondition..
  // if(frameCount<488){
     cam.move(0, 0, 0.9);
  // }
  //CameraMovementCondition.._END
}


















//............Tested codes............///
  // perspective(PI / 2.0, width /height);
  //camX = map(mouseX, 0, width/10, -200, 200);
  //camera((Xpos) +30 , -height/8, 0);
  //camera((Xpos) +30 , -height/8, 0, width, height/6,0,0,1,0);
  // cam.move(delta, 0, 0);
  // if (frameCount % 10 === 0) {
  //   delta *= 2;
  // }
  // if (delta===2 || delta > 2.2) {
  //   delta =2;
  // }
  // perspective(PI / 2.0, width /height);
  //camX = map(mouseX, 0, width/10, -200, 200);
  //camera((Xpos) +30 , -height/8, 0);
  //camera((Xpos) +30 , -height/8, 0, width, height/6,0,0,1,0);
  //translate(0, 0, mouseX);
  //console.log(modelX);
  //box(85);
  //rotateY(90);
  //rotateZ(90);
  //rotate(180);
  //  if(frameCount%1===0){
  //    if(Xpos<0){
  //      Xpos+=6;
  //    }
  //    if(Xpos===0){
  //      Xpos= -600;
  //    }
  //  }, (height/2) / tan(PI/6),width/2, height/2, 100, 0,1,0
  //  if(Xpos>200){
  //    Xpos = -width/2;
  //  }
  // if(frameCount%1===0){
  //   Xpos=Xpos+10;
  // }
  //modelX(0,0,0);
  // cam.setPosition(sin(frameCount / 60) * 200, 0, 100);
  // perspective();
  // X = sliderGroup[0].value();
  // Y = sliderGroup[1].value();
  // Z = sliderGroup[2].value();
  // centerX = sliderGroup[3].value();
  // centerY = sliderGroup[4].value();
  // centerZ = sliderGroup[5].value();
  //camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
  // for (var i = 0; i < 6; i++) {
  //   if (i === 2) {
  //     sliderGroup[i] = createSlider(10, 400, 200);
  //   } else {
  //     sliderGroup[i] = createSlider(-400, 400, 0);
  //   }
  //   h = map(i, 0, 6, 5, 85);
  //   sliderGroup[i].position(10, height + h);
  //   sliderGroup[i].style('width', '80px');
  // }
  //BG
  //image(bgImg, displayWidth/2, displayHeight/2, displayWidth, displayHeight);
  //BG_END
  //cam.setPosition(0,0,0);