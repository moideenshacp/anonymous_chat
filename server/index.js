const express = require('express')
const http = require('http')
const app = express()
const {Server} = require('socket.io')
const server = http.createServer(app)
const route = require('./Routes/route')

const cors = require('cors')
app.use(cors())
app.use(route)

const io = new Server(server,{
    cors:{
        origin:'http://localhost:5173',
        methods:['GET','POST']
    }

})

io.on('connection',(socket)=>{
    console.log('connected')

    socket.on('disconneted',()=>{
        console.log('disconnected');
        
    })
    
})

server.listen(3000,()=>{
    console.log('server started');
    
})