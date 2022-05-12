
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Client from "./components/Client";
import Team from "./components/Team";
import ToggleContext from "./context/ToggleContext";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <ToggleContext>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/client" element={<Client />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ToggleContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
