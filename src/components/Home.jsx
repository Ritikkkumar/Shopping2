import {useSelector} from "react-redux";
import ProductList from "./ProductList";
import "./Home.css"
import { useState } from "react";

function Home(){
    const [search,updatesearch]=useState("");

    function searchProduct(e){
        updatesearch(e.target.value);
    }

//const products=useSelector(store=>store.products.items);
    return(
        <>
        <div className="homecontainer">
            <input type="text" className="search" placeholder="Search Products" onChange={searchProduct}></input>
            <ProductList searchText={search}></ProductList>
        </div>
        </>
    )
}

export default Home;