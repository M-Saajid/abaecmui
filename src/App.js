import { Route, Routes } from "react-router-dom";
import "./App.css";
import Collections from "./components/Collections";

import NavbarTop from "./components/NavbarTop";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </div>
  );
}

export default App;
