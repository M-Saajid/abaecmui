import { Box, Container, IconButton, Typography } from "@material-ui/core";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import { Stack } from "@mantine/core";
import AdminCard from "./AdminCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();

  const [itemDetail, setitemDetail] = useState([]);

  // fetch all items
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(`http://localhost:5000/api/items`);
        setitemDetail(request.data.data.foundItems);
        return request;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  //submit the values added by the form
  const send = async (e) => {
    navigate("/addproduct");
    // e.preventDefault();
    // console.log("this is the file", files);

    // setErrors(validate(details, files, values));
    // setOpen(true);
    // setIsSubmitting(true);
  };

  return (
    <>
      <Container position="relative">
        <Box
          mt={2}
          mb={5}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="h6">All Products</Typography>
          <Box sx={{ display: "flex" }}>
            <Box mr={5}>
              <Typography s variant="h6">
                Add Item
              </Typography>
            </Box>

            <Fab onClick={send} size="small" color="black" aria-label="add">
              <AddIcon />
            </Fab>
          </Box>
        </Box>
      </Container>
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
            <AdminCard
              key={c._id}
              id={c._id}
              image={c.image}
              title={c.title}
              description={c.description}
              price={c.price}
              rating={c.rating}
              category={c.category}
              quantity={c.quantity}
            />
          );
        })}
      </Box>
    </>
  );
}

export default AdminPage;
