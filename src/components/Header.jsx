import "./Header.css"
//import { useSelector } from "react-redux";
//import { useState } from "react";
//import UseFetch from "../utils/useFetch";
import { Link } from "react-router-dom";

function Header(){

    
    // const{data,error,loading}=UseFetch("http://localhost:4500/viewcart");
    // //const arr=JSON.parse(data)
    // const [count,updatecount]=useState(0);
    // //console.log("data",data);
    // var count2=0;
    // // const count=useSelector(store=>store.cart.items)
    // // console.log(count);
    // if(data!=null){
    // for(let i=0;i<data.length;i++)
    // {
    //     count2+=data[i].quantity;
        
    // }
    // //console.log(count2);
    // }
    // if(count!=count2)
    // {
    //     updatecount(count2);
    //     //console.log("count",count);
    // }

    


    return(
        <>
        <div className="headercontainer">
        <h1 className="title">Shhopy Global</h1>
        <div className="cart">
            <div className="counter">{localStorage.getItem("cart")}</div>
            <Link to="/cart">
            <img src="https://t4.ftcdn.net/jpg/01/86/94/37/360_F_186943704_QJkLZaGKmymZuZLPLJrHDMUNpAwuHPjY.jpg" alt="cartlogo" height="50px" width="50px"></img>
            </Link>
        </div>
        </div>
        <div className="headercontainertwo">
        </div>
        </>
    )
}

export default Header;