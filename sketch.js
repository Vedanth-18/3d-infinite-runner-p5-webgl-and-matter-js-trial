//Matter JS.. 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;

//Game variables
var gameState;
var Mterrain;
var cam;
var bodyOne;
var rover;
var bg;

//Preload
function preload(){
  Mterrain = loadModel("terrain.obj", true);
  rover = loadImage("rover.gif");
  bg = loadImage("Ares.png");
}


function setup() {

   //MatterJS_SETUP
   engine = Engine.create();
   world = engine.world;
   
   //Initialising gameState
   gameState = 0;

  if(gameState === 0){
    createCanvas(displayWidth, displayHeight);
  }

}

function draw() {
  //CreatingCanvas - WEBGL Mode
    if(gameState === 1){
      createCanvas(displayWidth, displayHeight, WEBGL);
      //sampleVar = createGraphics(500, -500, P2D);

      //Cam
      cam = createCamera();

      //DebugModeON
      //debugMode(2100, 10,0 ,0, 0, 200, 0, 0, 0);

      //MatterJS - Creating body
      //bodyOne = new Sample(displayWidth/2-683, displayHeight/2-420, 160, 140);

    }   

  //Console.Log
  console.log("GameState : " + gameState);

  //Setting background according to the gameStates
  if(gameState === 0){
    //BackgroundImage - gameState === 0
    background(bg);
  }
  if(gameState === 1){
    //BackgroundColour - gameState === 1
    background("Black");
  }

  //MatterJS
   //bodyOne.display();
   //bodyOne.clicked();

  //Initialising WEBGL Mode...
  if(gameState === 1){
    //Smooth
    smooth();

    //OrbitalControl
    orbitControl(1,1,1);

    //Mterrain - Properties of terrain
    scale(6);
    translate(0,0,50);
    stroke(255);
    fill(255, 102, 94);
    model(Mterrain);
     
    //Mars rover - GIF
    push();
    texture(rover);
    noStroke();
    translate(0,0, 20);
    plane(20, 16);
    pop();

  //Setting camera position
  if(frameCount%400===0){
    cam.setPosition(0,0,300);
  }

  //Camera movement
    cam.move(0, 0, 0.9);
  } 
}

//MousePressed function - Change gameState
 function mousePressed(){
   console.log("Pressed")
   gameState = 1;
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