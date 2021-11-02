import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Typography,
  Grid,
  styled,
} from "@mui/material";
import React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "gatsby";

const NavLink = styled((props) => <Link activeClassName="active" {...props} />)`
  color: #20b2aa;
  text-decoration: none;

  :hover {
    &.mainTitle {
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
  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar>
        <Grid container>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <NavLink to="/" className="mainTitle">
              <Typography variant="h5">Seattle Security Guard</Typography>
            </NavLink>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <NavLink to="/about">
              <Typography variant="overline">About</Typography>
            </NavLink>
            <NavLink to="/services">
              <Typography variant="overline">Services</Typography>
            </NavLink>
            <NavLink to="/contact">
              <Typography variant="overline">Contact</Typography>
            </NavLink>
          </Grid>
        </Grid>
        <IconButton
          size="large"
          aria-label="menu"
          color="inherit"
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavHeader;
