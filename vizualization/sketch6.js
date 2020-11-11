let ws = new WebSocket('ws://127.0.0.1:1880/ws/recieve');

let data = [];
let gesture = 'RIGHT';
const radius = 250;
const arrLimit = 100;

ws.onopen = (event) => {
    console.log(event);
}

ws.onmessage = (msg) => {
    const obj = JSON.parse(msg.data)
    data.push(obj);
    gesture = obj.gesture;
    if (data.length > arrLimit) data.shift();
}


function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {
    background(0);
    console.log(gesture);
    console.log(data.length);
    noStroke();
    data.forEach((e, i) => {
        fill(color(e.r, e.g, e.b));
        switch (gesture) {
            case 'LEFT':
                circle(i * ((displayWidth / 2) / data.length), displayHeight / 2, radius);
                break;
            case 'RIGHT':
                circle(displayWidth - i * ((displayWidth / 2) / data.length), displayHeight / 2, radius);
                break;
            case 'UP':
                circle(displayWidth / 2, i * ((displayHeight / 2) / data.length), radius);
                break;
            case 'DOWN':
                circle(displayWidth / 2, displayHeight - i * ((displayHeight / 2) / data.length), radius);
                break;
            default:
                // circle(i * ((displayWidth / 2) / data.length), 500, 200);
                break;
        }
    });
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