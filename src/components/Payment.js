import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Payment() {
  return (
    <Box>
      <Container sx={{marginTop:"15px"}}>
        <Typography fontWeight={500} variant="h4">Checkout (No of Items)</Typography>
      </Container>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Box>
  );
}

export default Payment;
