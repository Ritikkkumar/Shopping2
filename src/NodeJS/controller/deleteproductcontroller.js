import cartModel from "../module/cartmodel.js";

async function deleteproduct(req,res){

    const {id}=req.body;
    const deletedproduct=await cartModel.deleteOne({productid:id});

    res.send(deletedproduct);
}

export default deleteproduct;