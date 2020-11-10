let ws = new WebSocket('ws://127.0.0.1:1880/ws/recieve');

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
  console.log(bgColor);
  // document.writeln(JSON.stringify(data));
}


function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  const lineHeight = displayHeight / 3;
  background(255);
  noStroke();
  fill(255, 0, 0);
  rect(0, 0, bgColor.r * 4, lineHeight);
  fill(0, 255, 0);
  rect(0, lineHeight, bgColor.g * 4, lineHeight);
  fill(0, 0, 255);
  rect(0, lineHeight*2, bgColor.b * 4, lineHeight);
}

function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}