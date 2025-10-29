import mongoose from "mongoose";

export const connectDB = async () => {
    try { 
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(` mongoose is successfully connected with backend ${conn.connection.host}`)
    }
    catch (error) {
        console.log(`While connecting with mongoose we can see error please check ${error}`)
    }

}