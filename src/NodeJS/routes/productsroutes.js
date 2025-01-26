import productController from "../controller/productscontroller.js"
import cartController from "../controller/cartcontroller.js";
import addcart from "../controller/addcartcontroller.js";
import removecart from "../controller/removecartcontroller.js";
import viewcart from "../controller/viewcartcontroller.js";
import deleteproduct from "../controller/deleteproductcontroller.js";
import register from "../controller/registercontroller.js";
import loginuser from "../controller/logincontroller.js";
import authenticateuser from "../middleware/authenticate.js";

function routes(app){
    app.get("/products",authenticateuser,productController);
    app.post("/addproduct",authenticateuser,cartController);
    app.put("/increase",authenticateuser,addcart);
    app.put("/decrease",authenticateuser,removecart);
    app.get("/viewcart",authenticateuser,viewcart);
    app.delete("/delete",authenticateuser,deleteproduct);
    app.post("/register",register);
    app.post("/login",loginuser);
}

export default routes;