const express = require("express") 
const {createServer} = require("node:http")
const { Server } = require("socket.io") 

const app = express() 
const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin : "*"
    }
})

io.on("connection",(socket) => {
    console.log ("Alguien se conecto")
    // mensajes a todos
    socket.emit("bienvenido", "holi uwu")  

    socket.on("mensaje" , (mensaje) => {
        console.log(mensaje) 
    })
})

server.listen(3000,() => {
    console.log("corriendo")
})

