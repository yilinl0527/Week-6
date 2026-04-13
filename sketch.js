let cam;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  cam = createCamera();
}

function draw() {
  background(150);

  if (keyIsDown(87)) cam.move(0, 0, -5);
  if (keyIsDown(83)) cam.move(0, 0, 5);
  if (keyIsDown(65)) cam.move(-5, 0, 0);
  if (keyIsDown(68)) cam.move(5, 0, 0);

  cam.pan(-movedX * 0.002);


  for(let i = 0; i < 5; i++) {
    push();
    
    let angle = TWO_PI / 5 * i;
    rotateY(angle);
    
    translate(0, 0, -300); 
    
    fill(200); 
    noStroke(255);
    rect(-50, -100, 100, 200);
    
    stroke(100);
    strokeWeight(2);
    fill(220);
    pop();
  }
}

function mousePressed() {
  requestPointerLock();
}