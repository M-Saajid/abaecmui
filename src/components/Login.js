import { makeStyles, TextField, InputAdornment } from "@material-ui/core";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  createStyles,
  CssBaseline,
  IconButton,
  Stack
} from "@mui/material";
import { Check, Visibility, VisibilityOff } from "@mui/icons-material";
import validate from "../validations/Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { useNotifications } from "@mantine/notifications";

function Login() {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const notifications = useNotifications();
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    username: "",
    password: "",
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setDetails({ ...details, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setDetails({
      ...details,
      showPassword: !details.showPassword
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlesubmit = (e) => {
    setErrors(validate(details));
    setIsSubmitting(true);
    // auth.login(details.username);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const useStyles = makeStyles((theme) =>
    createStyles({
      logo: {
        width: 100
      },
      textField: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px"
      }
    })
  );
  useEffect(() => {
    // check if any validation errors are present
    async function fetchData() {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        try {
          const response = await axios.post(" http://localhost:5000/login", {
            username: details.username,
            password: details.password
          });
          notifications.showNotification({
            title: "Successfully login ",
            message: "Welcome to ABAEC !",
            icon: <Check size={18} />,
            autoClose: 1000,
            color: "teal"
          });

          localStorage.setItem("jwt", "Bearer " + response.data.token);
          localStorage.setItem("user", response.data.data);

          // auth.login(response.data.data);
          const results = await axios.post(
            "http://localhost:5000/api/searchcus",
            {
              username: details.username
            }
          );

          console.log("user email", results.data.results[0].email);
          localStorage.setItem("email", results.data.results[0].email);

          navigate("/collections");
        } catch (error) {
          setOpen(true);
        }
      }
    }
    fetchData();
  }, [errors]);

  const alert = (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Access denied "}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Username or Password Invalid , Please check !
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );

  const classes = useStyles();

  return (
    // <Box position={"reative"}>
    <Box
      width={"50%"}
      pt={2}
      pb={2}
      ml="auto"
      mr="auto"
      mt={20}
      border={"2px solid black"}
      sx={{ boxShadow: 10 }}
    >
      <img
        className={classes.logo}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuirahyitgSIy78EwdM52Lw9dM1aJ7sstWbXJTW5Kq1DQi8I33UdEaTnHzKPCMwTq1ePI&usqp=CAU"
        alt="/"
      />

      <Box mb={5}>
        <Container>
          <Stack>
            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="username"
              name="username"
              variant="outlined"
              size="medium"
              onChange={handleChange("username")}
              error={errors.username && true}
              helperText={errors.username && "Username Required !"}
            />

            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="medium"
              type={details.showPassword ? "text" : "password"}
              value={details.password}
              onChange={handleChange("password")}
              error={errors.password && true}
              helperText={errors.password && "Password Required !"}
              endadornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {details.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Stack>
        </Container>
      </Box>
      <Button onClick={handlesubmit} variant="contained">
        Login
      </Button>
      {alert}
    </Box>
  );
}

export default Login;
