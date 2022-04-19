import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography
} from "@material-ui/core";
import { Rating, Stack } from "@mui/material";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import validate from "../validations/Addproducts";
import { useNotifications } from "@mantine/notifications";
import { CheckIcon } from "@modulz/radix-icons";
import { Alert, Snackbar } from "@mui/material";
function AddProduct() {
  const navigate = useNavigate();
  const notifications = useNotifications();
  const token = localStorage.getItem("jwt");

  const [values, setValues] = useState(false);
  const [open, setOpen] = React.useState(false);
  //check user is clicked the submit button
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  //intitialize the value of details to null
  const [details, setDetails] = useState({});
  //handling the image file
  const [files, setFiles] = useState();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  //onhandlechange the input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  //submit the values added by the form
  const send = async (e) => {
    e.preventDefault();
    console.log("this is the file", files);
    setErrors(validate(details, files, values));
    setOpen(true);
    setIsSubmitting(true);
  };

  useEffect(() => {
    async function fetchData() {
      // check if any validation errors are presentand user have selected the image
      if (Object.keys(errors).length === 0 && isSubmitting && files) {
        const data = new FormData();
        data.append("title", details.title);
        data.append("description", details.desc);
        data.append("price", details.price);
        data.append("rating", values);
        data.append("quantity", details.quantity);
        data.append("category", details.category);
        data.append("productImage", files);
        try {
          const response = await axios.post(
            `http://localhost:5000/api/items`,
            data,
            {
              headers: { authorization: token }
            }
          );
          console.log(response);
          // notification settings
          const id = notifications.showNotification({
            loading: true,
            title: "Product added Successful ",
            message: "update successfull",
            autoClose: false,
            disallowClose: true
          });
          setTimeout(() => {
            notifications.updateNotification(id, {
              id,
              color: "teal",
              title: "Product added Successful",
              icon: <CheckIcon />,
              autoClose: 500
            });
          }, 1000);

          navigate("/addminview");
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, [errors]);

  return (
    <Box
      pt={2}
      pb={2}
      boxShadow={24}
      mt={8}
      mb={0}
      mr={"auto"}
      ml={"auto"}
      maxWidth="600px"
      border={"2px solid black"}
    >
      <Box mt={4} width="50%" ml={"auto"} mr={"auto"}>
        <Stack spacing={2}>
          <TextField
            error={errors.title && true}
            helperText={errors.title && `${errors.title}`}
            id="outlined-basic"
            label="Enter the tittle"
            name="title"
            variant="outlined"
            size="small"
            onChange={handleChange}
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <TextField
            error={errors.price && true}
            helperText={errors.price && `${errors.price}`}
            id="outlined-basic"
            label="Enter the price"
            name="price"
            variant="outlined"
            size="small"
            onChange={handleChange}
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <TextField
            error={errors.desc && true}
            helperText={errors.desc && `${errors.desc}`}
            id="outlined-basic"
            label="Enter the description"
            name="desc"
            variant="outlined"
            size="small"
            onChange={handleChange}
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <TextField
            error={errors.quantity && true}
            helperText={errors.quantity && `${errors.quantity}`}
            id="outlined-basic"
            label="Enter the quantity"
            name="quantity"
            variant="outlined"
            size="small"
            onChange={handleChange}
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <TextField
            error={errors.category && true}
            helperText={errors.category && `${errors.category}`}
            id="outlined-basic"
            label="Enter the category"
            name="category"
            variant="outlined"
            size="small"
            onChange={handleChange}
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
        </Stack>
      </Box>
      <Box
        Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
        mt={2}
      >
        <Rating
          name="rate half-rating"
          value={values}
          onChange={(event, newValue) => {
            setValues(newValue);
          }}
        />
        <Box mt={3} mb={2}>
          <input
            type="file"
            name="file"
            onChange={(event) => {
              const file = event.target.files[0];
              setFiles(file);
            }}
          />
        </Box>
      </Box>

      <Button onClick={send} variant="contained">
        Add
      </Button>
    </Box>
  );
}

export default AddProduct;
