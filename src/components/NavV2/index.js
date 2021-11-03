import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Box } from "@mui/system";
import { NavLink } from "../Navigation/NavLinks";

const links = ["about", "services", "contact"];

function NavV2() {
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const smallerScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const renderMenuButton = smallerScreen ? (
    <IconButton
      size="large"
      sx={{ mt: 2 }}
      onClick={() => setOpenMenu(!openMenu)}
    >
      <MenuIcon color="secondary" />
    </IconButton>
  ) : null;

  const renderLinks = links.map((link) => (
    <NavLink
      to={`/${link}`}
      className="nav-link"
      sx={{
        position: "relative",
        height: "65px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="overline"
        className={openMenu || !smallerScreen ? "show-text" : ""}
        sx={{
          position: "absolute",
          opacity: 0,
          transform: "translateX(500px)",
          transition: "0.5s ease-in",
          "&.show-text": {
            opacity: 1,
            transform: "translateX(0)",
          },
        }}
      >
        {link}
      </Typography>
    </NavLink>
  ));

  return (
    <AppBar>
      <Toolbar
        sx={{
          minHeight: "65px",
          m: "0 auto",
          width: "90%",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: smallerScreen ? "column" : "row",
        }}
      >
        {renderMenuButton}
        <Box
          className={openMenu ? "show-links" : ""}
          sx={{
            height: { xs: 0, sm: "auto !important" },
            overflow: { xs: "hidden" },
            display: { sm: "flex" },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { sm: "center" },
            justifyContent: { sm: "space-around" },
            width: { xs: 0, sm: "100%" },
            transition: "0.3s ease-in-out all",
            "&.show-links": {
              width: "100vw",
              height: `${65 * links.length}px`,
            },
          }}
        >
          {renderLinks}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavV2;
