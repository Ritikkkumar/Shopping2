import cartModel from "../module/cartmodel.js";

async function addcart(req,res){

    const {id,count}=req.body;
    await cartModel.updateOne({productid:id},{$set:{quantity:count+1}});
    const product=await cartModel.findOne({productid:id});

    res.send({product});

}

export default addcart;