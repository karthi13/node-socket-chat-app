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

let getQueueLength = function() {  
    return Math.round(12 * Math.random());
};

const io = socketIO(server);

io.on('connection',(socket)=>{
    console.log('listning to event');

    setInterval(function() {  
        let queueLength = getQueueLength();
    
        console.log(`The queue at the McDonald's drive-through is now ${queueLength} cars long.`);
    
        if (queueLength === 0) {
            console.log('Quick, grab your coat!');
            socket.emit('newEmail', {
                createdAt : 1234,
                from : "SENSOR_ID_123",
                text : "Hello! Sensor data"
            })
        }
    
        if (queueLength > 8) {
            return console.log('This is beginning to look impossible!');
        }
    }, 3000);

    socket.on('disconnect',()=>{
        console.log('disconnected from event');
    })

    socket.on('createEmail',function(data){
        console.log(data);
    });
})



// We would like to retrieve the queue length at regular intervals
// this way, we can decide when to make a quick dash over
// at the optimal time


console.log(publicPath);