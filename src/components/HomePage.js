import {
  Container,
  createStyles,
  Grid,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import { makeStyles, Box, styled, CssBaseline } from "@material-ui/core";
import React from "react";
import { border } from "@mui/system";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15
    },
    "& .MuiImageMarked-root": {
      opacity: 0
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor"
    }
  }
}));
const useStyles = makeStyles((theme) =>
  createStyles({
    heroContainer: {
      backgroundImage: `url("https://img.wallpapersafari.com/desktop/1536/864/50/81/cgrxqi.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "absolute",
      width: "100%",
      height: "800px"
    },
    logo: {
      maxWidth: 50,
      marginTop: 20,
      marginBottom: 20
    },
    head: {
      width: "150px"
    },
    heroCards: {
      transition: " 1.2s",
      "&:hover": {
        transform: "scale(0.9)"
      }
    },
    banner: {
      width: "100%",
      height: "100%"
    },
    textad: {
      color: "white",
      width: "100%",
      height: "150px",
      marginLeft: "auto",
      marginRight: "auto"
    }
  })
);
const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity")
}));
const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity")
}));
function HomePage() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Box className={classes.heroContainer}>
        <Box sx={{ backgroundColor: "black", opacity: "0.6", height: "350px" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Georgia, 'Times New Roman', Times, serif"
            }}
            mt={10}
            variant="h2"
            className={classes.textad}
          >
            New Arrivals!
          </Typography>
          <Typography align="center" variant="body1" sx={{ color: "white" }}>
            Shopping Mart, Try our newly Arrived collection explore here with
            new delightful experince . with new fashion way ,collect your simple
            outfit.
          </Typography>

          <ImageButton focusRipple>
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`
                }}
              >
                Collections
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </Box>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Box
              mt={8}
              container
              display="flex"
              direction="row"
              alignItems="center"
              position="relative"
              flexWrap="wrap"
              sx={{
                display: "flex",
                flexWrap: "wrap",

                "& > :not(style)": {
                  width: 300,
                  height: 500
                }
              }}
            >
              <Paper
                className={classes.heroCards}
                sx={{
                  backgroundSize: "cover",
                  marginBottom: "15px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundImage: `url(http://st.depositphotos.com/1008939/2261/i/450/depositphotos_22619283-shopping-woman-.jpg)`
                }}
                elevation={24}
              >
                <Container
                  sx={{
                    marginTop: "300px",
                    height: "60px",
                    borderRadius: "10px",
                    backgroundColor: "black",
                    opacity: "0.8",
                    color: "white"
                  }}
                >
                  <Typography variant="body2" textAlign="left">
                    Shops the collection
                  </Typography>
                  <Typography variant="body1">Women's</Typography>
                </Container>
              </Paper>
              <Paper
                className={classes.heroCards}
                sx={{
                  backgroundSize: "cover",
                  marginBottom: "15px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundPosition: "center",
                  backgroundImage: `url(https://www.thefashionisto.com/wp-content/uploads/2020/11/Stylish-Male-Model-Suit-Black-Shopping-Bag-Luxury.jpg)`
                }}
                elevation={24}
              >
                <Container
                  sx={{
                    marginTop: "300px",
                    height: "60px",
                    borderRadius: "10px",
                    backgroundColor: "black",
                    opacity: "0.8",
                    color: "white"
                  }}
                >
                  <Typography variant="body2" textAlign="left">
                    Shops the collection
                  </Typography>
                  <Typography variant="body1">Men's</Typography>
                </Container>
              </Paper>
              <Paper
                className={classes.heroCards}
                sx={{
                  backgroundSize: "cover",
                  marginBottom: "15px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundPosition: "center",
                  backgroundImage: `url(https://i.ebayimg.com/images/g/tgIAAOSwu19erm3v/s-l400.jpg)`
                }}
                elevation={24}
              >
                <Container
                  sx={{
                    marginTop: "300px",
                    height: "60px",
                    borderRadius: "10px",
                    backgroundColor: "black",
                    opacity: "0.8",
                    color: "white"
                  }}
                >
                  <Typography variant="body2" textAlign="left">
                    Shops the collection
                  </Typography>
                  <Typography variant="body1">Accessories</Typography>
                </Container>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        <Box
          mt={20}
          sx={{
           
            backgroundColor: " rgba(184, 147, 149, 0.13)",
            marginBottom: "50px"
          }}
        >
          <Grid container spacing={3}>
            <Grid item>
              <Box width={400}>
                <img
                  width={100}
                  src="https://static.thenounproject.com/png/2063658-200.png"
                  alt="Free Return"
                />
                <Container sx={{ width: "50%" }}>
                  <Typography variant="body1" gutterBottom fontWeight={500}>
                    {" "}
                    FREE RETURN
                  </Typography>
                  <Typography fontWeight={100} variant="subtitle2">
                    Not what expected?Place it back on the parceland attach the
                    bill
                  </Typography>
                </Container>
              </Box>
            </Grid>
            <Grid item>
              <Box width={400}>
                <img
                  width={100}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxO3xI_cxS1uP6ak1QNE29z8oFyDjH4fC2UV_5C0_fuF9ntamrYwoBtCwauPq_3YVLiik&usqp=CAU"
                  alt="Free Return"
                />
                <Container sx={{ width: "50%" }}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    textAlign={"left"}
                    fontWeight="500"
                    sx={{ width: "350px" }}
                  >
                    {" "}
                    SAME DAY DELIVERY
                  </Typography>
                  <Typography fontWeight={400} variant="subtitle2">
                    We offera delivery services that has never been done before
                    .Checkout today and recive your products within hours
                  </Typography>
                </Container>
              </Box>
            </Grid>
            <Grid item>
              <Box width={400}>
                <img
                  width={100}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtbnUq8z38w9o1g_qpUUMHwamrCKUbqxrZUWSv8ZsUj1MMjo2y31nfGRap6dn4My-JnM&usqp=CAU"
                  alt="Free Return"
                />
                <Container sx={{ width: "50%" }}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    textAlign={"left"}
                    fontWeight="500"
                    sx={{ width: "350px" }}
                  >
                    {" "}
                    ALL YEAR DISCOUNT
                  </Typography>
                  <Typography fontWeight={400} variant="subtitle2">
                    Looking for a deel ? You can use the code "ALL YEAR" at
                    checkout and get money off all year around
                  </Typography>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={20} width={"100%"} height="400px" bgcolor={"rgba(184, 147, 149, 0.13)"}>
          <Container fixed>
            <img
              src="https://seeklogo.com/images/P/phoenix-bird-logo-78F2C24DA2-seeklogo.com.png"
              alt="Kitty Katty!"
              className={classes.logo}
            />
          </Container>

          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Container>
                <Typography variant="body1" fontWeight={800}>
                  Product
                </Typography>
                <Stack mt={10} spacing={5}>
                  <Typography>Watch</Typography>
                  <Typography>Shirts</Typography>
                  <Typography>Denium</Typography>
                </Stack>
              </Container>
            </Grid>
            <Grid item xs={4}>
              <Container>
                <Typography variant="body1" fontWeight={800}>
                  Company
                </Typography>
                <Stack mt={10} spacing={5}>
                  <Typography>Watch</Typography>
                  <Typography>Shirts</Typography>
                  <Typography>Denium</Typography>
                </Stack>
              </Container>
            </Grid>
            <Grid item xs={4}>
              <Container>
                <Typography variant="body1" fontWeight={800}>
                  Services
                </Typography>
                <Stack mt={10} spacing={5}>
                  <Typography>Watch</Typography>
                  <Typography>Shirts</Typography>
                  <Typography>Denium</Typography>
                </Stack>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
