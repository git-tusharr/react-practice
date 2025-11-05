import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{ padding: "10px", textAlign: "center" }}>
        <Link
          style={{ margin: "0 10px",  textDecoration: "none", color: "black", fontSize: "18px",}}
        >
          Home
        </Link>
        |
        <Link
          to="About"
         style={{ margin: "0 10px",  textDecoration: "none", color: "black", fontSize: "18px",}}
        >
          About
        </Link>
        |
        <Link
          to="Display"style={{ margin: "0 10px",  textDecoration: "none", color: "black", fontSize: "18px",}}>
          Display
        </Link>
      </nav>

      <hr />

    
      <Outlet />

      <hr />

      <footer style={{textAlign: "center", padding: "10px", fontSize: "14px" }}>
        www.myCompany.com all rights reserved
      </footer>
    </>
  );
};

export default Layout;
