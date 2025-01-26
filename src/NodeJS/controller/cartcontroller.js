import cartModel from "../module/cartmodel.js";

async function cartController(req,res) {

    const {productid,quantity,thumbnail,price}=req.body;
    console.log("productid",productid);
    const newCartItem= await cartModel.create({
        productid:productid,
        quantity:quantity,
        thumbnail:thumbnail,
        price:price,
    });
    newCartItem.save().then((data)=>{
        console.log(data);
    })

    res.send(newCartItem);
}

export default cartController;