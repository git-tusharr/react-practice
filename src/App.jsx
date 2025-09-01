import { useSelector,useDispatch } from "react-redux";
import { Increse,Decrease,Reset} from "./countSlice";



const App=()=>{

    const currentCount=useSelector((state)=>state.myCount.count);
    const dispatch=useDispatch();
    return(
        <>
        <h1>Welcomr to Counter App</h1>

        <h1>Count : {currentCount}</h1>
        <button onClick={()=>{dispatch(Increse())}}>Increase</button>
        <button onClick={()=>{dispatch(Decrease())}}>Decrease</button>
        <button onClick={()=>{dispatch(Reset())}}>Reset</button>
        </>
    )
}
export default App;