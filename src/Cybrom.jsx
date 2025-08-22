import { useContext } from "react";
import { UserContext } from "./myContext";

const Cybrom=({children})=>{
    const {user,setUser}=useContext(UserContext);
    return(
        <>
        <h1>Welcome to Cybrom :{user}</h1>
        <button onClick={()=>{setUser("sohan")}} >click</button>
        </>
    )
}
export default Cybrom;