import AuthApp from "./AuthApp";
import UnAuthApp from "./UnAuthApp";
import { useContext } from "react";
import { MyLoginContext } from "./LoginContext";


const App=()=>{
    const { user } = useContext(MyLoginContext);
    return(
        <>
        <h1>Login system</h1>
        {user.auth? <AuthApp/> :<UnAuthApp/> }
        </>

    )
}

export default App;