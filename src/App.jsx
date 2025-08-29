import { useSelector,useDispatch } from "react-redux";
import { colorChange } from "./colorSlice";

const App=()=>{

  const bgcolor=useSelector(state=>state.mycolor.color);
  const dispatch=useDispatch();
  return(
    <>
    <h1>Welcome</h1>
    <button onClick={()=>{dispatch(colorChange())}}>CLick here</button>
    <div style={{width:"500px",height:"200px",backgroundColor:bgcolor}} >


    </div>

    
    </>
  )
}
export default App;