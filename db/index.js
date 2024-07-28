import mongoose from "mongoose";


const connectDB = async () => {

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/locker`)
        console.log(`\n MONGO DB connected !! DB HOST: ${connectionInstance.connection.host}`);

    } catch (error) {

        console.log("MONGO DB connection failed", error);
    }

}

export default connectDB