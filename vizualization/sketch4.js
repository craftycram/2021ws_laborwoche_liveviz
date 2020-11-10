let ws = new WebSocket('ws://127.0.0.1:1880/ws/recieve');

let dir = '';
let bgColor = {
    r: 0,
    g: 0,
    b: 0,
};

ws.onopen = (event) => {
    console.log(event);
}

ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    bgColor.r = data.r;
    bgColor.g = data.g;
    bgColor.b = data.b;
    dir = data.gesture
}


function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {
    const drawColor = color(bgColor.r, bgColor.g, bgColor.b);
    background(drawColor);
    textSize(200);
    textAlign(CENTER);
    fill(inverseColor(bgColor.r, bgColor.g, bgColor.b));
    text(dir, (width / 2), height / 2)
}

function mousePressed() {
    let fs = fullscreen();
    fullscreen(!fs);
}

function inverseColor(r,g,b){
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
    return color(r,g,b);
  }