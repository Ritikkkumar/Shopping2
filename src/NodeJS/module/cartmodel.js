import mongoose from "mongoose";

const cartSchema= mongoose.Schema({
    productid:String,
    brand:String,
    quantity:Number,
    thumbnail:String,
    price:Number
})

const cartModel=mongoose.model("cart",cartSchema);

export default cartModel;