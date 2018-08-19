function setup() {
  createCanvas(400, 400);

}

function draw() {
  translate(width / 2, height / 2);
  rectMode(CENTER);

  background(0);
  fill(255);

  let h = map(sin(frameCount / 50), -1, 1, 100, -100);
  rect(0, 0, 10, h);
}
