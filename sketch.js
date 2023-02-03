let angle = 0;
let angleV = 0;

function setup() {
    createCanvas(innerWidth, innerHeight);
}

function draw() {
    background(0);
    translate(200, 200);
    fill(252, 238, 33);
    // let r = map(sin(angle), -1, 1, 0, 200);
    let y = map(sin(angle), -1, 1, 0, 200);
    circle(0, y, 32);
    stroke(252, 238, 33);
    line(0, 0, 0, y);

    // let increment = TWO_PI / 60;
    angle += angleV;

    angleV += .0001;
}