let ws = new WebSocket('ws://127.0.0.1:1880/ws/recieve');

let data = {};
let x, y;
const r = 100;
const s = r;

ws.onopen = (event) => {
    console.log(event);
}

ws.onmessage = (msg) => {
    data = JSON.parse(msg.data);
}


function setup() {
    createCanvas(displayWidth, displayHeight);
    background(0);
    x = r;
    y = r;
}

function draw() {
    noStroke();
    fill(color(data.r, data.g, data.b));
    circle(x, y, r);
    
    x+=s;
    if (x >= displayWidth -r) { y+=s; x = r; }
    if (y >= displayHeight) y=r;

}

function mousePressed() {
    let fs = fullscreen();
    fullscreen(!fs);
}

function inverseColor(r, g, b) {
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
    return color(r, g, b);
}