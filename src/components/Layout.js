import React from "react";
import NavBar from "./Navbar";
import "../styles/global.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <div>{children}</div>
      <div className="footer">
        <p>&copy; Developed by Vikas</p>
      </div>
    </div>
  );
}

export default Layout;
