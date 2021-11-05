import React from "react";
import { Box } from "@mui/material";

const PageComponent = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        paddingBottom: "7rem",
        marginTop: "5rem",
      }}
    >
      {children}
    </Box>
  );
};

export default PageComponent;
