import {useSelector} from "react-redux";
import CartItem from "./CartItem";
import UseFetch from "../utils/useFetch";

function Cart(){
    // const cartItems=useSelector(store=>store.cart.items);
    // console.log("cart",cartItems);

    //const arr=[];
    
    // const filtered=cartItems.map((el)=>{
    //     var aa=true;
    //     if(arr.includes(el))
    //     {
    //         aa=false;
    //         return 
    //     }
    //     arr.push(el);
    //     if(aa)
    //     {
    //         return el;
    //     }
        
    // })

    // const filtered2=filtered.filter((el)=>{
    //     return el!=undefined;
    // })
    // console.log("filtered",filtered);

    const{data,error,loading}=UseFetch("http://localhost:4500/viewcart");

    if(data){
    return(
        <>
        <div className="cartItems">
            {data.map((el)=>{
                return(
                <CartItem data={el}></CartItem>
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

export default Cart;