import React from "react";
import { Link } from "gatsby";
import { styled, Typography, Box } from "@mui/material";

export const NavLink = styled((props) => (
  <Link activeClassName="active" {...props} />
))`
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
    text-shadow: 0px 0px 3px #2e8b42;
  }

  &.active {
    &.mainTitle {
      color: #20b2aa;
    }
    color: #ffffff;
    text-shadow: 0px 0px 5px #ffffff;
  }
`;

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
