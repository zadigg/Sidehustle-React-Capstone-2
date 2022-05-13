import React from "react";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar_main">
      <div className="sidebar_Header">Sidehustle</div>
      <div className="sidebar_lists">
        <Link
          className="linkStyle"
          style={{ textDecoration: "none" }}
          to="/home"
        >
          <div>Home</div>
        </Link>
        <Link
          className="linkStyle"
          style={{ textDecoration: "none" }}
          to="/team"
        >
          <div>Team Memebers</div>
        </Link>
        <Link
          className="linkStyle"
          style={{ textDecoration: "none" }}
          to="/client"
        >
          <div>Clients</div>
        </Link>

        <Link
          className="linkStyle"
          style={{ textDecoration: "none" }}
          to="/product"
        >
          <div>Products</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
