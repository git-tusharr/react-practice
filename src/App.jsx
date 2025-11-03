import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search";
import Update from "./pages/Update";
import Contact from "./pages/Contact";


const App=()=>{

    return(
        <>
        <h1>Welcome to Counter App</h1>


        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="insert" element={<Insert></Insert>}></Route>
            <Route path="display" element={<Display></Display>}></Route>
            <Route path="update" element={<Update></Update>}></Route>
            <Route path="search" element={<Search></Search>}></Route>
            <Route path="contact" element={<Contact></Contact>}></Route>
            
            
            
            </Route>
        </Routes>
        </BrowserRouter>



        </>
    )
}
export default App;