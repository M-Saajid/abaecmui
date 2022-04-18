import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useStateValue } from "../store/StateProvider";
import CheckoutCard from "./CheckoutCard";
import CollectionCard from "./CollectionCard";

function Payment() {
  const [{ basket }] = useStateValue();
  return (
    <Box>
      <Container sx={{ marginTop: "15px" }}>
        <Typography fontWeight={500} variant="h4">
          Checkout (No of Items)
        </Typography>
      </Container>
      <Box p={4}>
        <Stack direction={"row"} spacing={10}>
          <Typography variant="h6" textAlign={"left"}>
            {" "}
            Dilevery Address{" "}
          </Typography>
          <Typography variant="subtitle1"> React rd 216/1 </Typography>
        </Stack>
      </Box>
      <Divider />
      <Box>
        <Typography variant="h6">Review Items</Typography>
        <Box
          container
          display="flex"
          direction="row"
          alignItems="center"
          position="relative"
          flexWrap="wrap"
        >
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
      </Box>
      <Divider />
      <Box>
        <Typography variant="h6">Payment Method Card</Typography>
      </Box>
    </Box>
  );
}

export default Payment;
