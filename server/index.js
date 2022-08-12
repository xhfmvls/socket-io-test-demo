const http = require('http').createServer();

const io = require('socket.io')(http, {
  cors: { 
    origin: "*" 
  }
});

io.on('connection', (socket) => {
  console.log(`[*] User Connected`); 

  socket.on('message', (message) => {
    console.log(message); 
    const emitMessage = `${socket.id.substr(0, 2)}: ${message}`;
    io.emit('message', emitMessage);
  });
});

http.listen(8080, () => {
  console.log('[*] Server Listening on Port 8080'); 
  
})