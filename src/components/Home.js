import React from "react";
import "../styles/structure.css";
import Sidebar from "./Sidebar";
import HomeDetail from "../pages/HomeDetail";
import DashBoardHeader from "./DashBoardHeader";
import { useStateContext } from "../context/ToggleContext";

const Home = () => {
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

        <HomeDetail />
      </div>
    </div>
  );
};

export default Home;
