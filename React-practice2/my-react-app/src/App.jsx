import { BrowserRouter,Route,Routes } from "react-router-dom";

import contact from "./pages/contact";
import display from "./pages/Display";
import update from "./pages/update";
import search from "./pages/search";
import Layout from "./Layout";


const App=()=>{
  return(
    <>
    <h1>Weclome to my app</h1>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout></Layout>} ></Route>
      <Route path="Contact" element={<contact></contact>} ></Route>   
      <Route path="Display" element={<display></display>}   ></Route>
      <Route path="Search" element={<search></search>}></Route>
      <Route path="Update" element={<update></update>}></Route>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default App;