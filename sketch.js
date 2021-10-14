var weight = [35,38,42,45,43,34,36,41,48,32];
var sprites = [];
var s1,s2,s3,s4;
function setup() {
  createCanvas(400,400);

  s1= createSprite(75,100,30,30);
  s2= createSprite(150,250,30,30);
  s3= createSprite(300,300,30,30);
  s4= createSprite(350,150,30,30);

  sprites=[s1,s2,s3,s4];

  for(var i=0; i<sprites.length; i=i+1){
    console.log(sprites[i].position.x);
}
}

function draw() 
{
  background(30);
  drawSprites();
}
