import React, { useState } from "react";
import { AppBar, Toolbar } from "@mui/material";

import NavHeader from "./NavHeader";
import NavLinks from "./NavLinks";

function Navigation() {
  const [show, setShow] = useState(false);
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <NavHeader show={show} setShow={setShow} />
        <NavLinks show={show} />
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
