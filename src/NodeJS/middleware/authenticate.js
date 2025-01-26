import jwt from "jsonwebtoken";

function authenticateuser(req,res,next){
    const authheader=req.headers["authorization"];
    const token=authheader&&authheader.split(" ")[1];

    jwt.verify(token,"secret",(err,user)=>{
        if(err){
            return res.status(403).json({message:"Invalid"});
        }
        req.user=user;
        next();
    })
}

export default authenticateuser;