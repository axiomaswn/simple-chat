'use strict'
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('disconnect', () => {
    console.log('disconnected');
  });
  socket.on('chat message', (message) => {
    console.log('message: ' + message);
  });
});;

http.listen(3030, () => {
  console.log('menggunakan port 3030');
});
