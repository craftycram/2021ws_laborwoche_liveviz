let ws = new WebSocket('ws://127.0.0.1:1880/ws/recieve');

let data = {};

ws.onopen = (event) => {
    console.log(event);
}

ws.onmessage = (msg) => {
    data = JSON.parse(msg.data);
}


function setup() {
    createCanvas(displayWidth, displayHeight);
    colorMode(HSB);
}

function draw() {
    const drawColor = color(map(data.cv, 0, 1024, 0, 360), 100, map(data.gate, 0, 1024, 100, 0));
    background(drawColor);
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