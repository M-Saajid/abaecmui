import { Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CheckoutCard from "./CheckoutCard";
import reducer, { initialState } from "../store/reducer";
import { StateProvider, useStateValue } from "../store/StateProvider";
function CheckoutpageLeft() {
  const [{ basket }] = useStateValue();
  // const basket = [1, 3, 2, 4];

  const subtitle = (
    <Typography variant="subtitle1">
      You have no product in the cart ,Please add to cart by clicking "ADD TO
      BASKET" button in the collection
    </Typography>
  );
  const product = (
    <Box ml={"20px"}>
      <Container sx={{ marginTop: "15px" }}>
        <Typography variant="h6">Thank for choosing ABAEC .</Typography>
        <Typography variant="h6">Your Cart,</Typography>
      </Container>
      {basket.map((item) => (
        <CheckoutCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
          description={item.description}
          quantity={item.quantity}
        />
      ))}
    </Box>
  );
  return (
    <Box>
      <Typography variant="h3">Hello SK</Typography>
      <Divider />
      {basket.length > 0 ? product :subtitle  }
    </Box>
  );
}

export default CheckoutpageLeft;
