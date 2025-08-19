import { createContext,useState } from "react";

const myContext=createContext();

import Bhopal from "./Bhopal";


const App=()=>{
  const [city,setCity]=useState("satna");
    return(
        <>

        <button onClick={()=>{setCity("ujjain")}}>click here</button>
        <h1>Welcome to App : {city}</h1>
        <myContext.Provider value={{city,setCity}}>
          <Bhopal></Bhopal>
        </myContext.Provider>
        
        </>
    )
}
export default App;
export {myContext};