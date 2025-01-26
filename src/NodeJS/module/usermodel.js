import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    email:String,
    password:String,
    name:String,
})

const userModel=mongoose.model("user",userschema);

export default userModel;