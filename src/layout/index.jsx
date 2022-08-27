import React from "react";
import Navbar from "./navbar";
import "./index.scss";

const Layout = ({ children }) => {
  const [nav, setNav] = React.useState(false);
  return (
    <div className="layout">
      <Navbar show={nav} setNav={setNav} />

      <div className="layout-children">{children}</div>
    </div>
  );
};

export default Layout;
