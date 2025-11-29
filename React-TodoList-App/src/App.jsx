import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./todoSlice";

const App=()=>{
  const [txtVal,setTxtVal]=useState("");
  const dispatch=useDispatch();
  const myTask=useSelector(state=>state.mytodo.task)
  console.log(myTask);

  let Sno=0;
  const ans=myTask.map((key)=>{
    Sno++;
    return(
      <>
      <tr>
        <td>{Sno}</td>
        <td>{key.work}</td>
      </tr>
      </>
    )
  })

  
  return(
    <>
    <h1>This is my to-do list app</h1>

    Enter task : <input type="text" value={txtVal} onChange={(e)=>{setTxtVal(e.target.value)}}/>

    <button onClick={()=>{dispatch(addTask({id:Date.now(),work:txtVal}))}}>Add</button>
    
    <hr />

    <table>
      <tr>
        <th>Sno</th>
        <th>Task</th>
      </tr>
      {ans}
    </table>

    </>
  )
}
export default App;