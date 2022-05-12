import React from "react";
import DashBoardHeader from "./DashBoardHeader";
import Sidebar from "./Sidebar";
import ClientDetail from "../pages/ClientDetail";
import { useStateContext } from "../context/ToggleContext";

const Client = () => {
  const { collapse } = useStateContext();

  return (
    <div className="structure">
      {collapse ? (
        <div className="sidebar_structure">
          <Sidebar />
        </div>
      ) : null}
      <div className="detail_structure">
        <DashBoardHeader />

        <ClientDetail />
      </div>
    </div>
  );
};

export default Client;
