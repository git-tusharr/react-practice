import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./counterSlice";

const App=()=>{

  const count=useSelector(state=>state.mycounter.count);
  const dispatch=useDispatch();
  return(
    <>
    <h1>Welcome to counter</h1>
    <button onClick={()=>{dispatch(increment())}}>increment</button>
    <h1>count:{count}</h1>
    <button onClick={()=>{dispatch(decrement())}}>decrement</button>
    </>
  )
}
export default App;