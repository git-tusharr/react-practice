import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Display from "./pages/Display";
import About from "./pages/About";

import Layout from "./Layout";

const App=()=>{
  return(
    <>
    <h1></h1>

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

            
            <Route index element={<Home></Home>}></Route>
            <Route path="Home" element={<Home/>}></Route>
            <Route path="About" element={<About/>}></Route>
            <Route path="Display" element={<Display/>}></Route>
            
        </Route>
      </Routes>
    </BrowserRouter>


    
    </>
  )
}

export default App;