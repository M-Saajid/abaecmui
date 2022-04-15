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
function HeaderBottom() {
  const classes = useStyles();

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
          {" "}
          <IconButton disableRipple sx={{ marginRight: "30px" }}>
            <ShoppingBasketIcon className={classes.colour} />
          </IconButton>
        </Grid>
      </Grid>
      {/* </Container> */}
    </>
  );
}

export default HeaderBottom;
