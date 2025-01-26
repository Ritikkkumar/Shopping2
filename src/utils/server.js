import express from "express";
import routes from "../NodeJS/routes/productsroutes.js"
import mongoose from "mongoose";
import cors from "cors";
//import bodyParser from "body-parser";

mongoose.connect("mongodb://localhost:27017")

const app=new express();
    app.listen(4500,()=>{
        console.log("Running")
    })

    app.use(express.json());
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({extended:false}))
    app.use(cors({origin:true}));
    routes(app);