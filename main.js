function setup() {
  createCanvas(400, 400);

}

class Bar {
  render() {
    let h = map(sin(frameCount / 50), -1, 1, 100, -100);
    fill(255);
    rect(0, 0, 10, h);
  }
}

let bars = [];
bars.push(new Bar());

function draw() {
  translate(width / 2, height / 2);
  rectMode(CENTER);

  background(0);
  bars.forEach((bar) => {
    bar.render();
  })
}
