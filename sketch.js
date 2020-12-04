const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;
   
   var balloption={
     restitution:1,
     isStatic:false,
friction:0.5,
density:1.4
   }
   ball=Bodies.circle(200,200,20,balloption);
  World.add(world,ball);
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,340,20,100);
    box2 = new Box(900,340,20,100);
    

    box3 = new Box(800,390,160,20);
    if (keyCode===UP_ARROW){
    
        ball.applyForce( ball, {x: ball.position.x=200, y: ball.position.y=200}, {x: 0, y: -0.05});    }
    }

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    
}