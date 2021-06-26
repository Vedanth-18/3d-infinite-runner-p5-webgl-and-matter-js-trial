var spriteTest;

function setup(){
    push();
    createCanvas(500, 500);
    spriteTest = createSprite(250, 250, 300, 300);
    pop();
}

function draw(){
    background("000000");
    drawSprites();
}