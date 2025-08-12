import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Data from "./data";
import About from "./About";



const App=()=>{

  return(

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>  
    <Route index element={<Home/>}></Route>

    <Route path="home" element={<Home/>}></Route>
    <Route path="data" element={<Data/>}></Route>
    <Route path="about" element={<About/>}></Route>
    </Route>
  </Routes>
</BrowserRouter>
    
  );
};
export default App;

