import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CurrencyFormat from "react-currency-format";

function CheckoutpageRight() {
  return (
    <Box
      width={"auto"}
      display="flex"
      position={"absolute"}
      flexDirection={"column"}
      p={3}
      letterSpacing={1}
      sx={{ borderRadius: "10px",border: "1px solid black" }}
    >
      <CurrencyFormat
        renderText={(value) => (
          <>
            <Typography>
              Subtotal (5 items): <strong>240</strong>
            </Typography>

            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value="5"
        displayType={"text"}
        thousandSeparator={true}
        prefix={"LKR "}
      />

      <Button  sx={{marginTop:"10px", backgroundColor:"black"}} variant="contained" size="small">
        Checkout
      </Button>
    </Box>
  );
}

export default CheckoutpageRight;
