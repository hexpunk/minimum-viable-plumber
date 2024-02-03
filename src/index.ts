function setup() {
  createCanvas(640, 480);
  background(100);
}

let x = 0;

function draw() {
  ellipse(x, height / 2, 20, 20);
  x = x + 1;
}
