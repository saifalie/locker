import connectDB from "../db/index.js";
import server, { PORT } from "./app.js";
import dotenv from "dotenv"

// new way of importing dotenv

dotenv.config({
    path: "./env"
})


connectDB() 
    .then(() => {
        server.listen(PORT, () => {
            console.log(`server is running on the PORT:${PORT}`);
        })

    })
    .catch((error) => {
        console.log(`MONGODB connection failed !!`, error);

    })