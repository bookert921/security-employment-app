import { Box, Typography, styled } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

export const NavLink = styled(({ children, screen, open, ...otherProps }) => (
  <Link {...otherProps} activeClassName="isActive">
    <Typography
      className={open ? "animate-text" : ""}
      sx={{
        opacity: { xs: 0, sm: "initial" },
        transform: { xs: "translateX(200px)", sm: "none" },
        transition: ".5s ease-in-out all",
        "&.animate-text": {
          opacity: 1,
          transform: "translateX(0)",
        },
      }}
      variant={screen === "true" ? "h3" : "h6"}
    >
      {children.slice(0, 1).toUpperCase() + children.slice(1)}
    </Typography>
  </Link>
))(({ theme, screen }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: "none",
  marginTop: screen === "true" ? theme.spacing(10) : undefined,
  "&:hover": {
    transition: "0.1s ease-in-out all",
    color: theme.palette.secondary.light,
  },
  "&.isActive": {
    color: theme.palette.secondary.main,
    textShadow: [
      "0px 0px 2px black",
      "0px 2px 5px black",
      "0px 0px 15px " + theme.palette.primary.light,
      "0px 0px 10px white",
    ].join(", "),
  },
}));

function NavMenu({ openMenu, children }) {
  return (
    <Box
      role="navigation"
      component="nav"
      className={openMenu ? "show-links" : ""}
      sx={{
        width: { xs: "100%", sm: "60%" },
        height: { xs: 0, sm: "auto !important" },
        display: { xs: "flex", sm: "inline-flex" },
        justifyContent: { xs: "flex-start", sm: "space-around" },
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        overflow: "hidden",
        transition: "0.5s ease-in-out all",
        "&.show-links": {
          height: "100vh",
        },
      }}
    >
      {children}
    </Box>
  );
}

export default NavMenu;
