import express from "express"
import cors from "cors"
import testRouter from "../routes/test.route.js"

const app = express()
export const PORT = process.env.PORT || 7777



app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// const path = require('path');

// app.use(express.static(path.resolve('./public')));

app.use("/api/v1/test", testRouter)

export default app



