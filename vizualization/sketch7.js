let ws = new WebSocket('ws://127.0.0.1:1880/ws/recieve');

let data = {};
let x, y;
const r = 10;
const s = 1;

ws.onopen = (event) => {
    console.log(event);
}

ws.onmessage = (msg) => {
    data = JSON.parse(msg.data);
}


function setup() {
    createCanvas(displayWidth, displayHeight);
    background(0);
    x = displayWidth / 2;
    y = displayHeight / 2;
}

function draw() {
    noStroke();
    fill(color(data.r, data.g, data.b));
    circle(x, y, r);
    
    switch (data.gesture) {
        case 'LEFT':
            // if (x > 0) x--;
            x > 0 - r ? x-=s : x = displayWidth - r;
            circle(x+displayWidth, y, r);
            break;
        case 'RIGHT':
            // if (x < displayWidth) x++;
            x < displayWidth + r ? x+=s : x = 0 + r;
            circle(x-displayWidth, y, r);
            break;
        case 'UP':
            // if (y > 0) y--;
            y > 0 - r ? y-=s : y = displayHeight;
            circle(x, y+displayHeight, r);
            break;
        case 'DOWN':
            // if (y < displayHeight) y++;
            y < displayHeight + r ? y+=s : y = 0 - r;
            circle(x, y-displayHeight, r);
            break;
        default:
            break;
    }

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