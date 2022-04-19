import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography
} from "@material-ui/core";
import { Rating, Stack } from "@mui/material";
import React from "react";
import { Paper } from "@mui/material";

function AdminUpdatePage() {
  return (
    <Box
      pt={2}
      pb={2}
      boxShadow={24}
      mt={5}
      mb={2}
      mr={"auto"}
      ml={"auto"}
      maxWidth="600px"
      border={"2px solid black"}
    >
      <Container>
        <Typography variant="h5">title</Typography>
        <TextField
          id="outlined-basic"
          label="tittle"
          placeholder="Enter the tittle "
          name="title"
          variant="outlined"
          size="small"
          // onChange={handleChange}
          sx={{
            m: 1,
            width: "25ch",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />

        <Box mt={2} mb={2} component={"form"}>
          <Box
            mb={2}
            sx={{
              "& > :not(style)": {
                m: "auto",
                width: "100%",
                height: "200px"
              }
            }}
          >
            <Paper
              border={"1px solid black"}
              sx={{
                boxShadow: 100,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(https://www.thefashionisto.com/wp-content/uploads/2020/11/Stylish-Male-Model-Suit-Black-Shopping-Bag-Luxury.jpg)`
              }}
            />
          </Box>

          <Box>
            <input
              type="file"
              name="productImage"
              placeholder="Enter the title"
              //   onChange={(event) => {
              //     const file = event.target.files[0];
              //     setFiles(file);
              //   }}
            />
          </Box>
        </Box>
        <Typography>
          {" "}
          asdasd <br></br>we have only <b>3333 PCS</b>{" "}
        </Typography>
      </Container>
      <Box mb={2} />
      <Divider />

      <Box mt={4} width="50%" ml={"auto"} mr={"auto"}>
        <Stack spacing={2}>
          <TextField
            id="outlined-basic"
            label="Description"
            placeholder="Enter the Description "
            name="desc"
            variant="outlined"
            size="small"
            // onChange={handleChange}
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <TextField
            id="outlined-basic"
            label="Category"
            placeholder="Enter the Category "
            name="Category"
            variant="outlined"
            size="small"
            // onChange={handleChange}
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <TextField
            // error={errors.quantity && true}
            // helperText={errors.quantity && `${errors.quantity}`}
            id="outlined-basic"
            label="quantity"
            placeholder="Enter the Quantity "
            name="quantity"
            variant="outlined"
            size="small"
            // onChange={handleChange}
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <TextField
            // error={errors.price && true}
            // helperText={errors.price && `${errors.price}`}
            id="outlined-basic"
            label="Price"
            placeholder="Enter the price "
            name="price"
            variant="outlined"
            size="small"
            // onChange={handleChange}
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
        </Stack>
      </Box>
      <Box mt={2}>
        <Typography fontWeight={100}>LKR 55</Typography>
        <Rating name="read-only" value={4} readOnly />
        <Typography component="legend">Set Rating </Typography>
        <Rating
          name="rate half-rating"
          // value={values}
          // onChange={(event, newValue) => {
          //   setValues(newValue);
          // }}
        />
      </Box>

      <Button variant="contained">Update</Button>
    </Box>
  );
}

export default AdminUpdatePage;
