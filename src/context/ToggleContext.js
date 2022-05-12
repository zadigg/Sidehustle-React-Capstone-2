import React, { createContext, useContext, useState } from "react";

const Context = createContext();
const ToggleContext = ({ children }) => {
  const [collapse, setCollapse] = useState(true);
  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <Context.Provider value={{ collapse, toggle }}>{children}</Context.Provider>
  );
};

export default ToggleContext;
export const useStateContext = () => useContext(Context);
