const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3011;

const publicPath = path.join(__dirname + '/../public');
app.use(express.static(publicPath)); 

server.listen(PORT,( ) => {
    console.log(`Listining is Port ${PORT}`);
})

const io = socketIO(server);

io.on('connection',(socket)=>{
    console.log('listning to event');

    socket.on('disconnect',()=>{
        console.log('disconnected from event');
    })
})



console.log(publicPath);