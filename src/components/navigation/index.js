import React, { useState } from "react";
import { Link } from "gatsby";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import NavMenu, { NavLink } from "./NavMenu";

const TitleLink = styled((props) => (
  <Link {...props}>
    <Typography variant={props.fontType || "h4"}>{props.children}</Typography>
  </Link>
))(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: "none",
  margin: theme.spacing(1),
}));

const NavDropdown = styled(({ openMenu, setOpenMenu, ...props }) => (
  <IconButton
    className="show-menu"
    size="large"
    onClick={() => setOpenMenu(!openMenu)}
  >
    <MenuIcon {...props} fontSize="large" />
  </IconButton>
))(({ theme }) => ({
  display: "none",
  color: theme.palette.primary.contrastText,
  "&.show-menu": {
    display: "inline-flex",
  },
}));

const links = ["about", "services", "contact"];

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const smallerScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const renderLinks = links.map((link) => (
    <NavLink
      key={link}
      open={openMenu}
      to={`/${link}`}
      screen={smallerScreen.toString()}
    >
      {link}
    </NavLink>
  ));

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          width: "100%",
          flexDirection: smallerScreen ? "column" : "row",
          justifyContent: !smallerScreen && "space-between",
        }}
      >
        <TitleLink to="/">Seattle Security</TitleLink>
        <NavDropdown
          className={smallerScreen ? "show-menu" : ""}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <NavMenu openMenu={openMenu}>{renderLinks}</NavMenu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
