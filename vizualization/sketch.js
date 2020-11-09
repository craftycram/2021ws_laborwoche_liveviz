let ws = new WebSocket('ws://127.0.0.1:1880/ws/recieve');

ws.onopen = (event) => {
    console.log(event);
}

ws.onmessage = (msg) => {
    console.log(msg);
}