const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketio(server)
const port = process.env.PORT || 1000;


const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath))


io.on('connection', (socket)=>{
    console.log('new websocket connection');

    socket.emit('message', 'welcome!');
    socket.broadcast.emit('message', 'a new user has joined')


    socket.on('sendMessage', (message)=>{
         io.emit('message', message)
    })

    socket.on('disconnect', ()=>{
        io.emit('message', 'a user has left')
    })

})

server.listen(port, ()=>{
    console.log(`server is up on port ${port}`);
})



