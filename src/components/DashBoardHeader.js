import React from "react";
import { MenuIcon } from "@heroicons/react/solid";
import "../styles/Header.css";
import { useStateContext } from "../context/ToggleContext";

const DashBoardHeader = () => {
  const { collapse, toggle } = useStateContext();

  return (
    <div className="Header_Structure">
      <div className="ToggleIconClass">
        <MenuIcon onClick={toggle} className="menu_toggle" />
      </div>
      {!collapse ? <div className="SignInBtn">Sidehustle</div> : null}

      <div className="SignInBtn">Sign Out</div>
    </div>
  );
};

export default DashBoardHeader;
