import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import { Drawer } from "@mantine/core";
import {
  Avatar,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";


function HeaderTop() {
  const userName = "";
  const pages = ["Login", "Register"];
  const settings = ["Account", "Logout"];
  const [opened, setOpened] = useState(false);
  const [pageView, setPageView] = useState();
  const [auth, setAuth] = useState("false");
  const navLink = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "none",
      color: isActive
        ? "rgba(255, 255, 255, 0.836)"
        : "rgba(255, 255, 255, 0.836)"
    };
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: "18px",
    height: "30px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "100%"
    }
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      //   width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch"
      }
    }
  }));
  const check = () => {
    if (userName === "admin1200") {
      alert("im admin");
    } else {
      alert("im user");
    }
  };
  const login = () => {
    setPageView(true);
    setOpened(true);
  };

  const create = () => {
    setPageView(false);
    setOpened(true);
  };
  const authButton = (
    <Box sx={{ flexGrow: 0, mb: 1.5, display: { xs: "none", md: "flex" } }}>
      <Button color="inherit" onClick={check}>
        Login
      </Button>
      <Button color="inherit" onClick={create}>
        Register
      </Button>
    </Box>
  );
  const authAvatar = (
    <Box sx={{ flexGrow: 0, mb: 3 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            size="sm"
            alt="Remy Sharp"
            src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Profile-Picture-4.jpg"
            sx={{ width: 40, height: 35 }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="relative"
        sx={{ height: "45px", backgroundColor: "rgb(1, 1, 26)" }}
      >
        <Toolbar>
          <NavLink style={navLink} to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                cursor: "pointer",
                mb: 2,
                mr: 2,
                display: { xs: "none", md: "flex" }
              }}
            >
              ABAEC
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1, mb: 3, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {auth ? authButton : authAvatar}
        </Toolbar>
      </AppBar>
      <Drawer
        position="right"
        opened={userName ? false : opened}
        transition="rotate-left"
        transitionDuration={550}
        transitionTimingFunction="ease"
        onClose={() => setOpened(false)}
        size="800px"
      >
        {pageView ? <Login /> : <Register />}
      </Drawer>
    </div>
  );
}

export default HeaderTop;
