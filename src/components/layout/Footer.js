import { Typography, Box } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        height: "7rem",
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
