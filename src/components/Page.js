import React from "react";
import { Box } from "@mui/material";

const PageComponent = ({ children }) => {
  return (
    <Box
      sx={{
        width: "90vw",
        maxWidth: "1120px",
        margin: "0 auto",
      }}
    >
      {children}
    </Box>
  );
};

export default PageComponent;
