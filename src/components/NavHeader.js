import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  makeStyles,
  createStyles,
  Typography,
} from "@mui/material";
import React from "react";
import { Menu as MenuIcon } from "@mui/icons-material";

function NavHeader() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ width: "100%", justifyContent: "space-between" }}>
        <Typography variant="h5">Seattle Security Guard</Typography>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <Typography variant="overline">About</Typography>
          <Typography variant="overline">Services</Typography>
          <Typography variant="overline">Contact</Typography>
        </Box>
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
