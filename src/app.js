import express from "express"
import cors from "cors"
import testRouter from "../routes/test.route.js"
import http from "http"
import { Server } from "socket.io";



const app = express()
const server = http.createServer(app) // create HTTP server using Express
const io = new Server(server, {
    cors: {
        origin: "*", // You can specify allowed origins here instead of "*"
        methods: ["GET", "POST"]
    }
}) // Initialize Socket.IO with the HTTP server
export const PORT = process.env.PORT || 7777




app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// const path = require('path');

// app.use(express.static(path.resolve('./public')));




io.on("connection", (socket) => {
    console.log("user connected" + socket.id);

    socket.on("control", (data) => {
        console.log(data.command);

        socket.emit("statusUpdate", data)

    })

    socket.emit("control", { command: "ON" })


    socket.on("disconnect", () => {
        console.log("Client disconnected");

    })

})



app.use("/api/v1/test", testRouter)

export default server



