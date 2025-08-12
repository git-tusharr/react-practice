import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <Link to="/home">Home</Link> |
        <Link to="/data">Data</Link> |
        <Link to="/about">About</Link> |

        <hr />

        <Outlet></Outlet>

        <hr />

        www.mywebsite.com all right reserved
        </>
    )
}
export default Layout;