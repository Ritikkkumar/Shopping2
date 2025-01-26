import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userModel from "../NodeJS/module/usermodel.js";





function Login(){

    localStorage.setItem("cart",0);

    const [register,updateregister]=useState(false);
    const navigate=useNavigate();
    

    function change(){
        updateregister(!register);
    }

    if(register==false)
    {
        return(
            <>
            <div className="box">
            <h1>Shoppy Global</h1>
            <div className="maincontainer">
                <h2>Login</h2>
                <label for="email">Email</label>
                <input id="email" type="email"></input>
                <label for="password">Password</label>
                <input id="password" type="password"></input>
                <button className="button1" onClick={()=>{
                    const loginemail=document.getElementById("email");
                    const loginpassword=document.getElementById("password");
                    fetch("http://localhost:4500/login",{
                        method:"POST",
                        headers:{"Content-Type":"application/json",
                            'Access-Control-Allow-Origin':'*',
                        },
                        body:JSON.stringify({
                            email:loginemail.value,
                            password:loginpassword.value
                        }),
                        
                    }).then((data)=>{
                        if(data)
                        {
                            
                            //data.json().then(res=>console.log(res));
                            if(data.status==200)
                            {
                                navigate("/home");
                                data.json().then(res=>{localStorage.setItem("token",`${res.token}`)})
                                console.log("local",localStorage.getItem("token"));
                            }

                            else
                            {
                                alert("wrong credentials");
                            }
                            
                        }
                    })
                }}>Login</button>
            </div>
            <button className="opp" onClick={change}>Don't have a account register</button>
            </div>
            </>
        )
    }

    else{
        return(
            <>
            <div className="box">
            <h1>Shoppy Global</h1>
            <div className="maincontainer">
                <h2>Register</h2>
                <label for="name">Name</label>
                <input id="name"type="text"></input>
                <label for="email">Email</label>
                <input id="registeremail" type="email"></input>
                <label for="password">Password</label>
                <input id="registerpassword" type="password"></input>
                <button className="button1" onClick={async ()=>{
                    const name=document.getElementById("name");
                    const registeremail=document.getElementById("registeremail");
                    const registerpassword=document.getElementById("registerpassword");
                    
                    fetch("http://localhost:4500/register",{
                        method:"POST",
                        headers:{"Content-Type":"application/json",
                            'Access-Control-Allow-Origin':"true",
                        },
                        body:JSON.stringify({
                            
                            email:registeremail.value,
                            password:registerpassword.value,
                            name:name.value
                        }),
                        
                    }).then((data)=>{
                        if(data)
                        {
                            //data.json().then(res=>console.log(res));
                            if(data.status==200)
                                {
                                    navigate("/home");
                                    data.json().then(res=>{localStorage.setItem("token",`${res.token}`)})
                                    console.log("local",localStorage.getItem("token"));
                                }
                                else if(data.status==400)
                                {
                                    alert("email already exists");
                                }
                            
                        }
                    });
                }}>Register</button>
            </div>
            <button className="opp" onClick={change}>Already have a account login</button>
            </div>
            </>
        )
    }

    
}

export default Login;
