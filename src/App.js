import { Route, Routes } from "react-router-dom";
import "./App.css";
import Collections from "./components/Collections";
import { NotificationsProvider } from "@mantine/notifications";
import NavbarTop from "./components/NavbarTop";
import HomePage from "./components/HomePage";
import CheckoutPage from "./components/CheckoutPage";
import Payment from "./components/Payment";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <NotificationsProvider>
      <div className="App">
        <NavbarTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </NotificationsProvider>
  );
}

export default App;
