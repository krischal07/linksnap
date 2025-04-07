import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

if(!MONGODB_URI){
    throw new Error("MONGODB_URI Must be defined");
    
}


let cached = global.mongoose
if(!cached){
    cached = global.mongoose = {conn: null}

}

async function connectDB(){
    if(cached.conn){
        return cached.conn
    }

    const conn = await mongoose.connect(MONGODB_URI,{
        dbName: "linksnap",
        bufferCommands: false
    })
    cached.conn = conn
    return conn
}

export default connectDB