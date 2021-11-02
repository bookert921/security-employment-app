import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Typography,
  styled,
} from "@mui/material";
import React, { useState, forwardRef, useEffect, createRef } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "gatsby";

const NavLink = styled(
  forwardRef((props, ref) => (
    <Link ref={ref} activeClassName="active" {...props} />
  ))
)`
  color: #20b2aa;
  text-decoration: none;
  display: block;
  text-align: center;

  &.nav-link {
    text-transform: capitalize;
    padding: 1rem 0;
    border-top: 1px solid #cbd3e1;
  }

  @media screen and (min-width: 600px) {
    &.nav-link {
      padding: 0;
      border-top: none;
      margin-right: 1rem;
    }
  }

  :hover {
    &.mainTitle {
      color: #20b2aa;
      text-decoration: none;
    }
    color: #2e8b57;
    text-decoration: underline;
    text-underline-offset: 0.5em;
  }

  &.active {
    &.mainTitle {
      color: #20b2aa;
    }
    color: #ffffff;
  }
`;

function NavHeader() {
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState(null);
  const ref = createRef();

  useEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);

  console.log(show);
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            height: "6rem",
            width: { xs: "90vw", sm: "30%" },
            maxWidth: { xs: "1120px", sm: "40%" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NavLink to="/" className="mainTitle">
            <Typography variant="h5">Seattle Security Guard</Typography>
          </NavLink>
          <IconButton
            size="large"
            aria-label="menu"
            color="inherit"
            sx={{ display: { sm: "none" } }}
            onClick={() => setShow(!show)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          className={show ? "show-links" : ""}
          sx={{
            height: { xs: 0, sm: "auto !important" },
            overflow: "hidden",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { sm: "center" },
            justifyContent: { sm: "space-around" },
            width: "100%",
            transition: "0.3s ease-in-out all",
            ["&.show-links"]: {
              height: 65 * 3.05,
            },
          }}
        >
          <NavLink ref={ref} to="/about" className="nav-link">
            <Typography variant="overline">About</Typography>
          </NavLink>
          <NavLink to="/services" className="nav-link">
            <Typography variant="overline">Services</Typography>
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            <Typography variant="overline">Contact</Typography>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavHeader;
