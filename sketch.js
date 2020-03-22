




var follower
function setup() {
  createCanvas(800,400);
 fixed = createSprite(400, 200, 50, 50);

  follower = createSprite(400,200,50,50)

}

function draw() {
  background(255,255,255); 
  follower.x = mouseX
  follower.y = mouseY
  
if (follower.x - fixed.x < follower.width/2 + fixed.width/2
  && fixed.x - follower.x < follower.width/2 + fixed.width/2 
  && follower.y - fixed.y < follower.height/2 + fixed.height/2 
  && fixed.y - follower.y < follower.height/2 + fixed.height/2 ){
  follower.shapeColor = "red"
  fixed.shapeColor = "orange"
}
  drawSprites();
}