import {
  createStyles,
  CssBaseline,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Grid, Link, makeStyles, Paper, Box, styled } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../store/StateProvider";

const useStyles = makeStyles((theme) =>
  createStyles({
    gird: { backgroundColor: "#616161", height: "60px" },
    logo: {
      maxWidth: 40,
      marginLeft: "30px"
    },
    colour: {
      color: "white"
    }
  })
);
const navLink = ({ isActive }) => {
  return {
    textDecoration: isActive ? "none" : "none",
    color: isActive
      ? "rgba(255, 255, 255, 0.836)"
      : "rgba(255, 255, 255, 0.836)"
  };
};
function HeaderBottom() {
  const classes = useStyles();
  const [{ basket }] = useStateValue();

  return (
    <>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        position="relative"
        spacing={12}
        className={classes.gird}
      >
        <Grid item>
          <img
            src="https://seeklogo.com/images/P/phoenix-bird-logo-78F2C24DA2-seeklogo.com.png"
            alt="Kitty Katty!"
            className={classes.logo}
          />
        </Grid>

        <Grid item>
          <Stack
            spacing={2}
            sx={{ marginTop: "3px" }}
            direction="row"
            className={classes.colour}
          >
            <Typography>Women</Typography>
            <Typography>Men</Typography>
            <Typography>Acessories</Typography>
          </Stack>
        </Grid>
        <Grid item>
          <NavLink style={navLink} to="/checkout">
            <IconButton disableRipple sx={{ marginRight: "30px" }}>
              <ShoppingBasketIcon className={classes.colour} />
              <Typography color={"white"}>{basket?.length}</Typography>
            </IconButton>
          </NavLink>
        </Grid>
      </Grid>
      {/* </Container> */}
    </>
  );
}

export default HeaderBottom;
