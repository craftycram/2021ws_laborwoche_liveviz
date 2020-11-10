let ws = new WebSocket('ws://127.0.0.1:1880/ws/recieve');

let dir = '';

ws.onopen = (event) => {
    console.log(event);
}

ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    dir = data.dir
}


function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
      clear();
    text(dir, width / 2, height / 2)
  }