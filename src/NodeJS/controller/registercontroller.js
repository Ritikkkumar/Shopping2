import jwt from "jsonwebtoken";
import userModel from "../module/usermodel.js";

async function register(req,res){
    const {email,password,name}=req.body
    var newuser=false;

    await userModel.findOne({email:email}).then((data)=>{
        if(!data)
        {
            newuser=true;
        }
        else{
            res.status(400).json({messege:"email already exists"});
        }
    })
    if(newuser==true)
    {
    const accesstoken=jwt.sign(email,"secret");
    await userModel.create({
        email:email,
        password:password,
        name:name
    })
    res.send({token:accesstoken});
}
};

export default register;