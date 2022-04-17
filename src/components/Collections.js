import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CollectionCard from "./CollectionCard";
// const itemDetail = [1, 2, 3, 4, 5,6,7,8,9,10];

function Collections() {
  const [itemDetail, setitemDetail] = useState([]);

  // view all product
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:5000/api/items/");
      setitemDetail(request.data.data.foundItems);
      return request;
    }
    fetchData();
  }, []);

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
        return (
          <CollectionCard
            key={c._id}
            id={c._id}
            image={c.image}
            title={c.title}
            description={c.description}
            price={c.price}
            rating={c.rating}
            quantity={c.quantity}
          />
        );
      })}
    </Box>
  );
}

export default Collections;
