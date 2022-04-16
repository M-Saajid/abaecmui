import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import CheckoutCard from "./CheckoutCard";
import CollectionCard from "./CollectionCard";

function Payment() {
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
          <CheckoutCard />
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
