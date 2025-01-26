import "./CartItem.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { addItem } from "../utils/cartSlice";
import { sliceItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


function CartItem(props){

    const dispatch=useDispatch();
const cartItems=useSelector(store=>store.cart.items);
const filtered=cartItems.filter((el)=>{
    return el.brand==props.data.brand;
})
const [counts,updatecounts]=useState(props.data.quantity);
const [updatest,update]=useState(true);

function add(){
    updatecounts(counts+1);
    dispatch(addItem(props.data));

}

function subtract(){
    let i;
    for(i=0;i<cartItems.length;i++)
    {
        if(props.data.brand==cartItems[i].brand){
            dispatch(sliceItem(i));
            break;
        }
    }
    updatecounts(counts-1);
    console.log("cart",cartItems);
}

    return (
        <>
        <div className="cartitemcontainer">
            <div className="cartimage">
            <img src={props.data.thumbnail} alt="" height="" width=""></img>
            </div>
            <div className="cartitemdetails">
                <h2>{props.data.brand}</h2>
                <div className="stock">In stock</div>
                <div>&#8377; {props.data.price}</div>
                <div> Quantity : {counts}</div>
                <div className="addbuttons" onClick={()=>
                                {
                                    localStorage.setItem("cart",parseInt(localStorage.getItem("cart"))+1);
                                    fetch("http://localhost:4500/increase",{
                                        method:"PUT",
                                        headers:{
                                            "Content-Type":"application/json",
                                            'Authorization':`JWT ${localStorage.getItem("token")}`
                                        },
                                        body:JSON.stringify({
                                            id:props.data.productid,
                                            count:counts
                                        })
                                    }).then((response) => {
                                        if (!response.ok) {
                                          throw new Error('Network response was not ok ' + response.statusText);
                                        }
                                        return response.json(); // Parse the JSON response
                                      })
                                      .then((data) => {
                                        console.log('Success:', data);
                                      })
                                      .catch((error) => {
                                        console.error('Error:', error);
                                      });
                                      
                                      updatecounts(counts+1);
                                      
                                }
                            }>+</div>
                <div className="addbuttons" onClick={()=>
                                {
                                    localStorage.setItem("cart",parseInt(localStorage.getItem("cart"))-1);
                                    fetch("http://localhost:4500/decrease",{
                                        method:"PUT",
                                        headers:{
                                            "Content-Type":"application/json",
                                            'Authorization':`JWT ${localStorage.getItem("token")}`
                                        },
                                        body:JSON.stringify({
                                            id:props.data.productid,
                                            count:counts
                                        })
                                    }).then((response) => {
                                        if (!response.ok) {
                                          throw new Error('Network response was not ok ' + response.statusText);
                                        }
                                        return response.json(); // Parse the JSON response
                                      })
                                      .then((data) => {
                                        console.log('Success:', data);
                                      })
                                      .catch((error) => {
                                        console.error('Error:', error);
                                      });
                                      updatecounts(counts-1);
                                      if(counts==0){
                                        localStorage.setItem("cart",parseInt(localStorage.getItem("cart"))-1);
                                        fetch("http://localhost:4500/delete",{
                                            method:"DELETE",
                                            headers:{
                                                "Content-Type":"application/json",
                                                'Authorization':`JWT ${localStorage.getItem("token")}`
                                            },
                                            body:JSON.stringify({
                                                id:props.data.productid,
                                            })
                                        });
                                        updatecounts(0);
                                    }
                                
                            }}>-</div>
            </div>
        </div>
        </>
    )
}

export default CartItem;