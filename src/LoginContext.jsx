import {  createContext,useState } from "react";

const MyLoginContext=createContext();
const LoginContext=({children})=>{
    const [user,setUser]=useState({name:"",auth:false});

    const login=(nm)=>{
        setUser({name:nm,auth:true});
    }

    const logout=(nm)=>{
        setUser({name:"",auth:false});
    }
   return (
        <MyLoginContext.Provider value={{ user, login, logout }}>
            {children}
        </MyLoginContext.Provider>
    );
}
export default LoginContext;
export {MyLoginContext};
