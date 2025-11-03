import { Link,Outlet, Route } from "react-router-dom";


const Layout=()=>{
return(
    <>
    <Link to="home" >Home</Link> |
    <Link to="contact" >contact</Link> |
    <Link to="insert" >insert</Link> |
    <Link to="display" >display</Link> |
    <Link to="update" >update</Link> |
    <Link to="search" >search</Link>

    <hr />

    <Outlet></Outlet>

    <hr />
    www.mycompany.com
    
    
    </>
)
}
export default Layout;

