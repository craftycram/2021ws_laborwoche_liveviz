let ws = new WebSocket('ws://127.0.0.1:1880/ws/recieve');

let dir = '';

ws.onopen = (event) => {
    console.log(event);
}

ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    dir = data.gesture
}


function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {
    clear();
    textSize(200);
    textAlign(CENTER);
    text(dir, (width / 2), height / 2)
}

function mousePressed() {
    let fs = fullscreen();
    fullscreen(!fs);
}