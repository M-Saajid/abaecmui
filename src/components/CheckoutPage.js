import { Box, Grid } from "@mui/material";
import React from "react";
import CheckoutpageLeft from "./CheckoutpageLeft";
import CheckoutpageRight from "./CheckoutpageRight";

function CheckoutPage() {
  return (
    <Box position={"static"} width="100%" mt={5} maxHeight={"100%"} bgcolor="">
      <Grid container spacing={12}>
        <Grid item xs={6}>
          <CheckoutpageLeft />
        </Grid>
        <Grid item xs={6}>
          <CheckoutpageRight />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CheckoutPage;
