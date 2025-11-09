import axios from "axios";
import { useState } from "react";





const Insert=()=>{

  const [input,setInput]=useState({});

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setInput(values=>({...values,[name]:value}))

    console.log(input);
  }


  const handleSubmit=async()=>{

    let api="http://localhost:3000/students";

    let response = await axios.post(api,input);
    console.log(response);

  }




  
  return(
    <>
    <h1>Weclome to my insert</h1>

    Enter roll number : <input type="text" name="rollno" onChange={handleInput} /> <hr />

    Enter name  : <input type="text" name="name" onChange={handleInput}/> <hr />

    Enter roll city : <input type="text" name="city" onChange={handleInput}/> <hr />  

    Enter roll fees : <input type="text" name="fees" onChange={handleInput}/>
    <br />
    <br />

    <input type="submit" value="save" onClick={handleSubmit}/>


   
    </>
  )
}
export default Insert;