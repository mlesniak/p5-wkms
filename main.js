let bars = [];
let barWidth = 10;

function setup() {
  createCanvas(400, 400);

  for (let i = -width / 2; i < width / 2; i += barWidth) {
    bars.push(new Bar(i));
  }

}

class Bar {
  constructor(position) {
    this.position = position;
    this.maxHeight = random(100);
  }

  render() {
    let h = map(sin(frameCount / 50), -1, 1, -this.maxHeight, this.maxHeight);
    fill(255);
    rect(this.position, 0, barWidth, h);
  }
}

function draw() {
  translate(width / 2, height / 2);
  rectMode(CENTER);

  background(0);
  bars.forEach((bar) => {
    bar.render();
  })
}
