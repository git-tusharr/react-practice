import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";

import Home from "./pages/Home";    
import Contact from "./pages/Contact";
import Display from "./pages/Display";
import Update from "./pages/Update";
import Search from "./pages/Search";
import Insert from "./pages/Insert";

const App = () => {
  return (
    <>
      <h1>Welcome to my app</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
           
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />

            <Route path="contact" element={<Contact />} />
            <Route path="display" element={<Display />} />
            <Route path="update" element={<Update />} />
            <Route path="search" element={<Search />} />
            <Route path="insert" element={<Insert />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
