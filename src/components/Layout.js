import React from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavHeader from "./NavHeader";

const theme = createTheme({
  palette: {
    primary: { main: "#22333b" },
    secondary: { main: "#0a0908" },
  },
  typography: {
    fontFamily: "cursive",
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <NavHeader />
        <Container>{children}</Container>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
