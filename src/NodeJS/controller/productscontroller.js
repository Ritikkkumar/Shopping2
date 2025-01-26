import productModel from "../module/productsmodel.js";

function productController(req,res){
    productModel.find().then((data)=>{
        if(!data){
            return res.status(400).send("wrong")
        }
        res.send(data);
    }).catch((err)=>{
        res.status(500).json({messege:"error"})
    })
}

export default productController;