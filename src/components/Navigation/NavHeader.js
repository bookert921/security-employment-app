import React from "react";
import { IconButton, Box, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { NavLink } from "./NavLinks";

function NavHeader({ show, setShow }) {
  return (
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
        sx={{ display: { sm: "none" }, color: "#20b2aa" }}
        onClick={() => setShow(!show)}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
}

export default NavHeader;
