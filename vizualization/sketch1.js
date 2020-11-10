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
    background(color(bgColor.r, bgColor.g, bgColor.b));
  }

  function mousePressed() {
      let fs = fullscreen();
      fullscreen(!fs);
  }