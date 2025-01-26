import cartModel from "../module/cartmodel.js";

function viewcart(req,res){

    cartModel.find().then((data)=>{
        if(!data)
        {
            return res.status(400).send("wrong")
        }
        res.send(data);
    }).catch((err)=>{
        res.staus(500).json({messege:"error"})
    })

    }

    export default viewcart;
