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
import AdminPage from "./components/AdminPage";
import AdminUpdatePage from "./components/AdminUpdatePage";
import AddProduct from "./components/AddProduct";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Search from "./components/Search";
const promise = loadStripe(
  "pk_test_51J887XGHMWtYg6xLPWmnzfUQWvaLVp4z3DE5k2pjp8ZDJlvD2DFTxUu0J83gkzaUSrriT9g88J5NXM6TMbyn57aP00jnr1t036"
);

function App() {
  return (
    <NotificationsProvider>
      <div className="App">
        <NavbarTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/updateproduct" element={<AdminUpdatePage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </NotificationsProvider>
  );
}

export default App;
