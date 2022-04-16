import { Box } from "@mui/material";
import React from "react";
import CollectionCard from "./CollectionCard";
const itemDetail = [1, 2, 3, 4, 5];
function Collections() {
  return (
    <Box
      container
      display="flex"
      direction="row"
      alignItems="center"
      position="relative"
      flexWrap="wrap"
    >
      {itemDetail.map((c) => {
        return <CollectionCard />;
      })}
    </Box>
  );
}

export default Collections;
