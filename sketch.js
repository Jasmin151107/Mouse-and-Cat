var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var canvas,gardenImg

function preload() {
    //load the images here
    catImg1 = loadAnimation ("cat1.png")
    catImg2 = loadAnimation("cat2.png","cat3.png")
    catImg3 = loadAnimation ("cat4.png");
    
    mouseImg1 = loadAnimation("mouse1.png")
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png")
    mouseImg3 = loadAnimation("mouse4.png")
     gardenImg = loadImage("garden.png")   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(200,600)
    mouse.addAnimation("mouseStanding",mouseImg1)
    mouse.scale = 0.2

    cat = createSprite(870,600);
    cat.addAnimation("catSleeping",catImg1)
    cat.scale = 0.15
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("catLastImage",catImg3);
        cat.x = 300
        cat.scale =0.2
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImg",mouseImg3);
        mouse.scale =0.15
        mouse.changeAnimation("mouseLastImg");

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    

}
}
}