import React from "react";
import DashBoardHeader from "./DashBoardHeader";
import Sidebar from "./Sidebar";
import TeamDetails from "../pages/TeamDetails";
import { useStateContext } from "../context/ToggleContext";

const Team = () => {
  const { collapse, toggle } = useStateContext();
  return (
    <div className="structure">
      {collapse ? (
        <div className="sidebar_structure">
          <Sidebar />
        </div>
      ) : null}
      <div className="detail_structure">
        <DashBoardHeader />

        <TeamDetails />
      </div>
    </div>
  );
};

export default Team;
