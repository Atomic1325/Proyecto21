const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, rope
var suelo;
var barricada1;
var barricada2;
var barricada3;
var barricada4;
var barricada5;


function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });
  suelo = new Ground(700,500,1400,300);
  barricada1 = new Barricada(300, 180, 70, 70);
  barricada2 = new Barricada(320, 180, 70, 70);
  barricada3 = new Barricada(340, 180, 70, 70);
  barricada4 = new Barricada(360, 180, 70, 70);
  barricada5 = new Barricada(3800, 180, 70, 70);


}

function draw() {
  background(180);
  Engine.update(engine);

  ball.display();
  rope.display();
  suelo.display();
  barricada1.display();
  barricada2.display();
  barricada3.display();
  barricada4.display();
  barricada5.display();


}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}