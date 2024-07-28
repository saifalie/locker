import connectDB from "../db/index.js";
import app, { PORT } from "./app.js";
import dotenv from "dotenv"

// new way of importing dotenv

dotenv.config({
    path: "./env"
})


connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is running on the PORT:${PORT}`);
        })

    })
    .catch((error) => {
        console.log(`MONGODB connection failed !!`, error);

    })