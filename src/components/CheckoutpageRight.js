import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { Baskettotal } from "../store/reducer";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../store/StateProvider";

function CheckoutpageRight() {
  const navigate = useNavigate();
  const userLogedin = localStorage.getItem("user");
  const [{ basket }] = useStateValue();
  const userExist = () => {
    if (userLogedin) {
      if (basket.length > 0) {
        navigate("/payment");
      } else {
        navigate("/collections");
      }
    } else {
      navigate("/login")
    }
  };
  return (
    <Box
      width={"auto"}
      display="flex"
      position={"absolute"}
      flexDirection={"column"}
      p={3}
      letterSpacing={1}
      sx={{ borderRadius: "10px", border: "1px solid black" }}
    >
      <CurrencyFormat
        renderText={(value) => (
          <>
            <Typography>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </Typography>

            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={Baskettotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"LKR "}
      />

      <Button
        onClick={userExist}
        sx={{ marginTop: "10px", backgroundColor: "black" }}
        variant="contained"
        size="small"
      >
        Checkout
      </Button>
    </Box>
  );
}

export default CheckoutpageRight;
