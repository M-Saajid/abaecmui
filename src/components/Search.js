import { Box, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CollectionCard from "./CollectionCard";

function Search() {
  const [searchResults, setSearcResults] = useState({});
  const search = localStorage.getItem("searchkey");
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    //  getting the all items where user search for
    async function fetchData() {
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/search`,
          {
            title: search
          },
          {
            headers: { authorization: token }
          }
        );

        // updating all the user prefer items to usestate
        setSearcResults(result.data.data.foundItems);
      } catch (error) {
        console.log("this is the error", error);
      }
    }
    fetchData();
  }, [searchResults]);
  return (
    <Box container sx={{ display: "flex", justifyContent: "space-between" }}>
      {searchResults.length > 0 ? (
        searchResults.map((c) => {
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
        })
      ) : (
        <Typography variant="h5"> Search not found</Typography>
      )}
    </Box>
  );
}

export default Search;
