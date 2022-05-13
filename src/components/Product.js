import React from "react";
import { useStateContext } from "../context/ToggleContext";
import DashBoardHeader from "./DashBoardHeader";
import Sidebar from "./Sidebar";
import ProductDetail from "../pages/ProductDetail";

const Product = () => {
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

        <ProductDetail />
      </div>
    </div>
  );
};

export default Product;
