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
    this.maxHeight = random(100) + 10;
    this.setColor();
  }

  setColor() {
    this.color = color(random(255), random(255), random(255));
  }

  render() {
    let h = map(sin(frameCount / 50 + this.position), -1, 1, -this.maxHeight,
        this.maxHeight);
    fill(this.color);
    rect(this.position, 0, barWidth, h);

    if (abs(h) < 1) {
      this.setColor();
    }
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
