import UseFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { useState } from "react";
import Review from "./Review";

function ProductDetails(){
    
    const {data,error,loading}=UseFetch("https://dummyjson.com/products?limit=15");
    const [added,updateadded]=useState(1);
    const [countpro,updatecountpro]=useState(0);
    if(data){
        //console.log(data);
        const param=useParams();
        const dispatch=useDispatch();

        

        // function AddItem(item){
        //     dispatch(addItem(item));
        //     updateadded(2);
        //     updatecountpro(countpro+1);
        // }

        // function RemoveItem(){
        //     dispatch(removeItem());
        //     updatecountpro(countpro-1);
        //     if(countpro==0){
        //         updateadded(1);
        //     }
        // }

        const list=data.products.filter((el)=>{
            return el.id==param.id;
        })
        console.log("list",list);
        if(added==1)
        {
            return(
                <>
                 <div className="productDetailsContainer">
                    <div>
                        <img src={list[0].images[0]} alt="productIMG" width="500px" height="450px"></img>
                        <div className="buttons">
                            <button className="detailbutton" onClick={()=>{
                                localStorage.setItem("cart",parseInt(localStorage.getItem("cart"))+1);
                                fetch("http://localhost:4500/addproduct",{
                                    method:"POST",
                                    headers:{
                                        "Content-Type":"application/json",
                                        'Authorization':`JWT ${localStorage.getItem("token")}`
                                    },
                                    body:JSON.stringify({
                                        productid:list[0].id,
                                        brand:list[0].brand,
                                        quantity:1,
                                        thumbnail:list[0].thumbnail,
                                        price:list[0].price
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
                                  updateadded(2);
                                  updatecountpro(countpro+1);
                            }}>Add to cart</button>
                            <button className="detailbutton" onClick={()=>{
                                {
                                    localStorage.setItem("cart",parseInt(localStorage.getItem("cart"))+1);
                                    fetch("http://localhost:4500/addproduct",{
                                        method:"POST",
                                        headers:{
                                            "Content-Type":"application/json",
                                            'Authorization':`JWT ${localStorage.getItem("token")}`
                                        },
                                        body:JSON.stringify({
                                            productid:list[0].id,
                                            brand:list[0].brand,
                                            quantity:1,
                                            thumbnail:list[0].thumbnail,
                                            price:list[0].price,
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
                                      updateadded(2);
                                      updatecountpro(countpro+1);
                                }
                            }}>Buy now</button>
                        </div>
                        </div>
                        <div>
                        <h1>{list[0].brand}</h1>
                        <div className="rating">{`${list[0].rating} ⭐`}</div>
                        <div className="specialprice">Special price</div>
                        <h2>&#8377; {list[0].price}</h2>
                        <h2>{list[0].description}</h2>
                        <h3>{list[0].warrantyInformation}</h3>
                        <h3>{list[0].shippingInformation}</h3>
                        <div>
                            {
                                list[0].reviews.map((el)=>{
                                    return(
                                        <>
                                        <Review data={el}></Review>
                                        </>
                                    )
                                })
                            }
                        </div>
                        </div>
                </div>
                </>
            )
        }
        else{
            return(
                <>
                 <div className="productDetailsContainer">
                    <div>
                        <img src={list[0].images[0]} alt="productIMG" width="500px" height="450px"></img>
                        <div className="buttons2">
                            <button className="addedbutton" onClick={()=>{
                                {
                                    localStorage.setItem("cart",parseInt(localStorage.getItem("cart"))+1);
                                    fetch("http://localhost:4500/increase",{
                                        method:"PUT",
                                        headers:{
                                            "Content-Type":"application/json",
                                            'Authorization':`JWT ${localStorage.getItem("token")}`
                                        },
                                        body:JSON.stringify({
                                            id:list[0].id,
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
                                      updateadded(2);
                                      updatecountpro(countpro+1);
                                }
                            }}>+</button>
                            <div className="middle">{countpro}</div>
                            <button className="addedbutton" onClick={()=>{
                                {
                                    localStorage.setItem("cart",parseInt(localStorage.getItem("cart"))-1);
                                    fetch("http://localhost:4500/decrease",{
                                        method:"PUT",
                                        headers:{
                                            "Content-Type":"application/json",
                                            'Authorization':`JWT ${localStorage.getItem("token")}`
                                        },
                                        body:JSON.stringify({
                                            id:list[0].id,
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
                                      updateadded(2);
                                      updatecountpro(countpro-1);
                                      if(countpro==0){
                                        localStorage.setItem("cart",parseInt(localStorage.getItem("cart"))-1);
                                        updateadded(1);
                                        fetch("http://localhost:4500/delete",{
                                            method:"DELETE",
                                            headers:{
                                                "Content-Type":"application/json",
                                                'Authorization':`JWT ${localStorage.getItem("token")}`
                                            },
                                            body:JSON.stringify({
                                                id:list[0].id,
                                            })
                                        });
                                        updatecountpro(0);
                                    }
                                }
                            }}>-</button>
                        </div>
                        </div>
                        <div>
                        <h1>{list[0].brand}</h1>
                        <div className="rating">{`${list[0].rating} ⭐`}</div>
                        <div className="specialprice">Special price</div>
                        <h2>&#8377; {list[0].price}</h2>
                        <h2>{list[0].description}</h2>
                        <h3>{list[0].warrantyInformation}</h3>
                        <h3>{list[0].shippingInformation}</h3>
                        </div>
                </div>
                </>
            )
        }
        
    }

    else if(error)
    {
        return <p>Error in loading</p>
    }

    else if(loading)
    {
        return <p>Loading</p>
    }
}

export default ProductDetails;