import { useState } from "react";
import { useEffect } from "react";

function UseFetch(url){

    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response= await fetch(url,{
                    method:"GET",
                    headers:{
                        'Authorization':`JWT ${localStorage.getItem("token")}`
                    }
                });
                const result=await response.json();
                setData(result);
            }
            catch(err){
                setError(err);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    },[url]);
    return{data,error,loading};
}

export default UseFetch;



