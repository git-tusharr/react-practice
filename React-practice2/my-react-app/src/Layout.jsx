import { Link,Outlet } from "react-router-dom";

const Layout=()=>{


    return(
         <>
    <Link to="insert">Insert</Link>
    <Link to="display">display</Link>
    <Link to="search">search</Link>
    <Link to="contact">contact</Link>
    <Link to="update">update</Link>

    <hr />

    <Outlet></Outlet>

    <hr />
    www.mycompany.com all right reserved
    </>
    )
   
}