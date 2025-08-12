import { useState } from "react";

const App=()=>{

  const [count,setCount]=useState(0);

  const increase=()=>{ setCount(count+1)};
  const decrease=()=>{ setCount(count-1)};
   return(
    <>
    <h1>Welcome to counter app</h1>

    <p>count = {count}</p>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    
  
    
    </>
  )
}
 

export default App;