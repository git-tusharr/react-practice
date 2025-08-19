import { useContext } from "react";
import { myContext } from "./App";

const Jabalpur=()=>{
    const {city,setCity}=useContext(myContext);
    return(
        <>
        <h1>Welcome to Jabalpur : {city}</h1>
        <button onClick={()=>{setCity("Gwalior")}}>click here</button>

        </>
    )
}
export default Jabalpur;