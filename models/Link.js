import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    originalUrl: {
        type:String,
        required: true
    },
    shortCode:{
        type: String,
        required: true,
        unique: false   
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"

    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    clicks:{
        type: Number,
        default:0
    }

})

export default mongoose.models.Link || mongoose.model("Link", linkSchema) 