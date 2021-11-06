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
import { StaticImage } from "gatsby-plugin-image";
import { Box } from "@mui/system";

const TitleLink = styled(({ logo, children, ...otherProps }) => (
  <Link {...otherProps}>
    {logo}
    <Typography variant="h4" sx={{ ml: 2 }} fontWeight="bold">
      {children}
    </Typography>
  </Link>
))(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.contrastText,
  textDecoration: "none",
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

const Header = () => {
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
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar
          variant="regular"
          sx={{
            width: "100%",
            flexDirection: smallerScreen ? "column" : "row",
            justifyContent: !smallerScreen && "space-between",
            padding: "1rem",
          }}
        >
          <Box sx={{ marginTop: smallerScreen ? "10px" : 0 }}>
            <TitleLink
              to="/"
              logo={
                <StaticImage
                  src="../../assets/images/logo.svg"
                  alt="logo"
                  width={60}
                  placeholder="blurred"
                  layout="constrained"
                />
              }
            >
              Seattle Security
            </TitleLink>
          </Box>

          <NavDropdown
            className={smallerScreen ? "show-menu" : ""}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
          <NavMenu openMenu={openMenu}>{renderLinks}</NavMenu>
        </Toolbar>
      </AppBar>
      <Toolbar
        sx={{ height: smallerScreen ? "125px" : "65px", padding: "1rem" }}
      />
    </React.Fragment>
  );
};

export default Header;
