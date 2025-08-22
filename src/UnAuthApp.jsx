import { useState } from "react";
import { useContext } from "react";
import { MyLoginContext } from "./LoginContext";

const UnAuthApp=()=>{
    const [textval,setTextVal]=useState("");
    const {login}=useContext(MyLoginContext);
    return(
        <>
        Enter name :
        <input type="text" value={textval} onChange={(e)=>{setTextVal(e.target.value)}} />
        <br />
        <button onClick={()=>{login(textval)}}>Login</button>
        </>

    )
}

export default UnAuthApp;