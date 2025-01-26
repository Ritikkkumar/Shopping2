import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    brand:String,
})

const productModel=mongoose.model("products",productSchema);

export default productModel;