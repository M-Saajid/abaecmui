import {
  Alert,
  Box,
  Container,
  Divider,
  Stack,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Baskettotal } from "../store/reducer";
import { useStateValue } from "../store/StateProvider";
import CheckoutCard from "./CheckoutCard";
import CollectionCard from "./CollectionCard";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { Snackbar } from "@material-ui/core";

function Payment() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const token = localStorage.getItem("jwt");
  const Email = localStorage.getItem("email");
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessingd] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    //generate stripe sectret allows to charge the customers
    const getClientSecret = async () => {
      if (!basket.length == 0) {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/payment/create?total=${Baskettotal(basket)*100}`,
          { headers: { authorization: token } }
        );
        setClientSecret(response.data.clientSecret);
      } else {
        navigate("/collections");
      }
    };
    getClientSecret();
  }, []);
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleOPen = (reason) => {
    if (reason == "clickaway") {
    }
    setOpen(true);
  };
  const handleSubmit = async (event) => {
    //stripe
    event.preventDefault();
    setProcessingd(true);
    try {
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });

      setSucceeded(true);
      setError(null);
      setProcessingd(false);

      //sent customer email after payment is done
      console.log("this is user tocken", Email);

      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/mail`,
        {
          Cusemail: Email,
          price: Baskettotal(basket)
        },
        {
          headers: { authorization: token }
        }
      );

      // update the stock after to  customer purchase
      {
        basket.map(async (item) => {
          const response = await axios.patch(
            `${process.env.REACT_APP_BASE_URL}/api/stockUpdate/${item.id}`
          );
        });
      }
    } catch (error) {
      console.log(error);
    }

    //navigation after the paymnet id done
    dispatch({
      type: "EMPTY_BASKET"
    });
    navigate("/collections");
  };

  const handleChange = (event) => {
    //display error when customer type their card details
    //listen to  changes on the card element
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
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
        <Box component={"form"} onSubmit={handleSubmit}>
          <Box ml={"auto"} mr={"auto"} width="250px">
            <CardElement onChange={handleChange} />
          </Box>

          <Box className="payment__pricecontainer">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                  </small>
                </>
              )}
              decimalScale={2}
              value={Baskettotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"LKR "}
            />
            <button
              onClick={handleOPen}
              disabled={processing || disabled || succeeded}
            >
              <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
            </button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Thanks for choosing ABAEC ! E-recipt has sent for your E-mail
              </Alert>
            </Snackbar>  
          </Box>
          {/* errors handling */}
          {error && <div>{error}</div>}
        </Box>
      </Box>
    </Box>
  );
}

export default Payment;
