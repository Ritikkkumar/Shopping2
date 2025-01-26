import userModel from "../module/usermodel.js";
import jwt from "jsonwebtoken";



async function loginuser(req,res){

    const{email,password}=req.body;
    
    await userModel.findOne({email:email}).then((data)=>{
        if(!data)
        {
           return res.status(400).json({messege:"invalid credentials"});
            alert("invalid credentials")
        }
        else if(data.password!=password)
        {
            return res.status(400).json({messege:"invalid credentials"});
            alert("invalid credentials")
        }
        else{
            const token=jwt.sign(email,"secret");
            res.json({token:token});
            console.log("right");
            
        }
    }).catch((err)=>{
        res.status(400).send(err);

    })
}

export default loginuser;