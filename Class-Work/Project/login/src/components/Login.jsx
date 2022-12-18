import React, { useState } from "react";
const login = () =>{
const [login,setLogin]=useState({
    userName:'',
    userPassword:''
});
const handleSubmit = (event) =>{
    setLogin({...login,[event.target.name]:event.target.value});
}
    return(
        <>
        <div className="main text-center">
        <div className="loginbox mx-auto mt-5 w-25 p-5 bg-light border border-2 rounded">
            <h1 className="mb-5">Login form</h1>
        <div className="input-group mb-3">
            <span className="input-group-text">Email</span>
            <input className="form-control" type="email" name="userName" placeholder="your@email.com"></input>
    </div>
         <div className="input-group mb-3">
            <span className="input-group-text">Password</span>
            <input className="form-control" type="password" name="userPassword"></input>
        </div>
        <button className="btn bg-success rounded border text-white mt-3">Log in</button>
  </div>
</div>
        </>
    );

}
export default login;