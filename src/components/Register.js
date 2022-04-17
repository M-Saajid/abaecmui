import {
  Grid,
  Link,
  makeStyles,
  Paper,
  Box,
  styled,
  TextField,
  InputAdornment
} from "@material-ui/core";
import React, { useState } from "react";
import {
  Button,
  Container,
  createStyles,
  CssBaseline,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { CheckIcon, Cross1Icon } from "@modulz/radix-icons";
import { PasswordInput, Progress, Text, Popover } from "@mantine/core";
function Register() {
  const [details, setDetails] = useState({
    username: "",
    password: "",
    email: "",
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
  const useStyles = makeStyles((theme) =>
    createStyles({
      gird: { backgroundColor: "#616161", height: "60px" },
      logo: {
        width: 100
      },
      colour: {
        color: "white"
      },
      textField: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px"
      }
    })
  );
  function PasswordRequirement(_a) {
    var meets = _a.meets,
      label = _a.label;
    return (
      <Text
        color={meets ? "teal" : "red"}
        sx={{ display: "flex", alignItems: "center" }}
        mt={7}
        size="sm"
      >
        {meets ? <CheckIcon /> : <Cross1Icon />} <Box ml={10}>{label}</Box>
      </Text>
    );
  }
  const requirements = [
    { re: /[0-9]/, label: "Includes number" },
    { re: /[a-z]/, label: "Includes lowercase letter" },
    { re: /[A-Z]/, label: "Includes uppercase letter" },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" }
  ];
  function getStrength(password) {
    let multiplier = password.length > 5 ? 0 : 1;

    requirements.forEach((requirement) => {
      if (!requirement.re.test(password)) {
        multiplier += 1;
      }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
  }
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState("");
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(details.password)}
    />
  ));

  const strength = getStrength(details.password);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  const classes = useStyles();
  return (
    <Box
      width={"50%"}
      pt={2}
      pb={2}
      ml="auto"
      mr="auto"
      mt={20}
      border={"1px solid black"}
    >
      <Container ml="" mr="100" >
        <img
          className={classes.logo}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuirahyitgSIy78EwdM52Lw9dM1aJ7sstWbXJTW5Kq1DQi8I33UdEaTnHzKPCMwTq1ePI&usqp=CAU"
          alt="/"
        />
      </Container>

      <Box mb={5}>
        <Container>
          <Stack>
            <TextField
              // error={errors.email && true}
              // helperText={errors.email && `${errors.email} !`}
              className={classes.textField}
              type="email"
              id="outlined-basic"
              label="Email"
              name="email"
              variant="outlined"
              size="small"
              value={details.email}
              sx={{ m: 1, width: "25ch" }}
              onChange={handleChange("email")}
            />

            <TextField
              className={classes.textField}
              id="outlined-basic"
              label="username"
              name="username"
              variant="outlined"
              size="small"
            />
          </Stack>
          <Popover
            shadow="lg"
            opened={popoverOpened}
            position="bottom"
            placement="start"
            styles={{ popover: { width: "100%" } }}
            trapFocus={false}
            transition="pop-top-left"
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
            target={
              <TextField
                className={classes.textField}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                size="small"
                sx={{marginLeft:"auto",marginRight:"50px"}}
                type={details.showPassword ? "text" : "password"}
                value={details.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {details.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            }
          >
            <Progress
              color={color}
              value={strength}
              size={5}
              style={{ marginBottom: 10 }}
            />
            <PasswordRequirement
              label="Includes at least 6 characters"
              meets={details.password.length > 5}
            />
            {checks}
          </Popover>

          <Container>
            <Button variant="contained">Register</Button>
          </Container>
        </Container>
      </Box>
    </Box>
  );
}

export default Register;
