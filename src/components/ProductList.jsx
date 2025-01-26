import UseFetch from "../utils/useFetch"
import ProductItem from "./ProductItem";
import "./ProductList.css"


function ProductList(props){

    const{data,error,loading}=UseFetch("http://localhost:4500/products");

    if(data){
        console.log(data);
        const filterList=data[0].products.filter((el)=>{
            return el.brand.toLowerCase().includes(props.searchText.toLowerCase());
        })
        return(
            <>
             <div className="productListContainer">
                    {filterList.map((el)=>{
                        return (
                            <>
                            <ProductItem data={el} key={el.id}></ProductItem>
                            </>
                        )
                    })}
                </div>
            </>
        )
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

export default ProductList;