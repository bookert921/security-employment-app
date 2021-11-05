import { Typography, Box } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100vw",
        textAlign: "center",
        height: "5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "primary.main",
      }}
    >
      <Typography sx={{ color: "primary.contrastText" }}>
        &copy; {new Date().getFullYear()}
      </Typography>
      <Typography sx={{ color: "primary.contrastText" }}>
        Seattle Security
      </Typography>
    </Box>
  );
}

export default Footer;
