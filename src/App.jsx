import { useState } from "react";

const App=()=>{

  const [name,setName]=useState("")
  const [age,setAge]=useState()
  const [city,setCity]=useState("")
  const [fees,setFees]=useState()


  const handleSubmit=()=>{
    

    alert(`Name= ${name}  Age= ${age} City=${city} Fees=${fees}
      `
    )



  };


  return(
    <>
    <h1>Application form</h1>


    Enter name : <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}/>
    <br />
    Enter age : <input type="text" value={age}  onChange={(e)=>{setAge(e.target.value)}}/>
    <br />
    Enter city : <input type="text" value={city}  onChange={(e)=>{setCity(e.target.value)}}/>
    <br />
    Enter fees : <input type="text" value={fees} onChange={(e)=>{setFees(e.target.value)}}/>
    <br />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default App;