import "./ProductItem.css"
import { Link } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function ProductItem(props)
{
    const dispatch=useDispatch();
    const [added,updateadded]=useState(false);
    const [countpro,updatecountpro]=useState(0);

    // function AddCart(item)
    // {
    //     dispatch(addItem(item));
    //     updateadded(true);
    //     updatecountpro(countpro+1);
    // }

    // function RemoveItem()
    // {
    //     dispatch(removeItem());
    //     updatecountpro(countpro-1);
    //     if(countpro==0){
    //         updateadded(false);
    //     }
    // }

    if(added==false){
        return(
            <>
            <div className="itemMain">
            <Link to={`/product/${props.data.id}`} className="itemlink">
            <div className="productItemContainer">
                <img src={props.data.thumbnail} alt="ProductIMG" height="400px" width="300px"></img>
                <h1 className="itemtext">{props.data.brand}</h1>
                <h2 className="itemtext">&#8377; {props.data.price}</h2>
                <h3 className="itemtext">{props.data.description}</h3>
                
            </div>
            </Link>
            <button className="addcartbutton" onClick={()=>{
                                localStorage.setItem("cart",parseInt(localStorage.getItem("cart"))+1);
                                fetch("http://localhost:4500/addproduct",{
                                    method:"POST",
                                    headers:{
                                        "Content-Type":"application/json",
                                        'Authorization':`JWT ${localStorage.getItem("token")}`
                                    },
                                    body:JSON.stringify({
                                        productid:props.data.id,
                                        brand:props.data.brand,
                                        quantity:1,
                                        thumbnail:props.data.thumbnail,
                                        price:props.data.price
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
                                  updateadded(true);
                                  updatecountpro(countpro+1);
                            }}>Add To Cart</button> 
            </div>
            </>
        )
    }
    else{
        return(
            <>
            <div className="itemMain">
            <Link to={`/product/${props.data.id}`} className="itemlink">
            <div className="productItemContainer">
                <img src={props.data.thumbnail} alt="ProductIMG" height="400px" width="300px"></img>
                <h1 className="itemtext">{props.data.brand}</h1>
                <h2 className="itemtext">&#8377; {props.data.price}</h2>
                <h3 className="itemtext">{props.data.description}</h3>
            
            </div>
            </Link>
            <div className="buttons">
                <button className="addcartbutton2" onClick={()=>{
                                {
                                    localStorage.setItem("cart",parseInt(localStorage.getItem("cart"))+1);
                                    fetch("http://localhost:4500/increase",{
                                        method:"PUT",
                                        headers:{
                                            "Content-Type":"application/json",
                                            'Authorization':`JWT ${localStorage.getItem("token")}`
                                        },
                                        body:JSON.stringify({
                                            id:props.data.id,
                                            count:countpro,
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
                                      updateadded(true);
                                      updatecountpro(countpro+1);
                                }
                            }}>+</button>
                <div className="counter">{countpro}</div>
                <button className="addcartbutton2" onClick={()=>{
                                {
                                    localStorage.setItem("cart",parseInt(localStorage.getItem("cart"))-1);
                                    fetch("http://localhost:4500/decrease",{
                                        method:"PUT",
                                        headers:{
                                            "Content-Type":"application/json",
                                            'Authorization':`JWT ${localStorage.getItem("token")}`
                                        },
                                        body:JSON.stringify({
                                            id:props.data.id,
                                            count:countpro,
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
                                      updateadded(true);
                                      updatecountpro(countpro-1);
                                      if(countpro==0){
                                        localStorage.setItem("cart",parseInt(localStorage.getItem("cart"))-1);
                                        updateadded(false);
                                        fetch("http://localhost:4500/delete",{
                                            method:"DELETE",
                                            headers:{
                                                "Content-Type":"application/json",
                                                'Authorization':`JWT ${localStorage.getItem("token")}`
                                            },
                                            body:JSON.stringify({
                                                id:props.data.id,
                                            })
                                        });
                                        updatecountpro(0);
                                    }
                                }
                            }}>-</button>
                </div>
                </div>
            </>
        )
    }
    
}

export default ProductItem;