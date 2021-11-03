import React from "react";
import { Link } from "gatsby";
import { styled, Typography, Box } from "@mui/material";

export const NavLink = styled((props) => (
  <Link activeClassName="active" {...props} />
))(({ theme }) => ({
  textDecoration: "none",
  display: "block",
  textAlign: "center",
  color: theme.palette.secondary.main,

  "&.nav-link": {
    textTransform: "capitalize",
    padding: "1rem 0",
    borderTop: "1px solid #cbd3e1",
  },
  ["@media screen and (min-width: 600px)"]: {
    "&.nav-link": {
      padding: 0,
      borderTop: "none",
      marginRight: "1rem",
    },
  },
  ["&:hover"]: {
    "&.mainTitle": {
      color: "#20b2aa",
      textDecoration: "none",
    },
    textDecoration: "underline",
    textUnderlineOffset: "0.5em",
    textShadow: "0px 0px 3px #2e8b42",
  },
  ["&.active"]: {
    "&.mainTitle": {
      color: "#20b2aa",
    },
    color: "#ffffff",
    textShadow: "0px 0px 5px #ffffff",
  },
}));
const links = ["about", "services", "contact"];

const NavLinks = ({ show }) => {
  const renderLinks = links.map((link) => (
    <NavLink to={`/${link}`} className="nav-link">
      <Typography variant="overline">{link}</Typography>
    </NavLink>
  ));

  return (
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
        "&.show-links": {
          height: 65 * links.length,
        },
      }}
    >
      {renderLinks}
    </Box>
  );
};

export default NavLinks;
