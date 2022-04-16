import { Route, Routes } from "react-router-dom";
import "./App.css";
import Collections from "./components/Collections";

import NavbarTop from "./components/NavbarTop";
import HomePage from "./components/HomePage";
import CheckoutPage from "./components/CheckoutPage";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
