import { useContext } from "react";
import { MyLoginContext } from "./LoginContext";

const AuthApp=()=>{
    const {user,logout}=useContext(MyLoginContext);
    return(
        <>
        <h1>Welcome : {user.name} </h1>
        <button onClick={()=>{logout()}}>logout</button>
        <br />
        </>

    )
}

export default AuthApp;