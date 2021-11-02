import React from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Nav from "./Navigation";
import "@fontsource/roboto";

const theme = createTheme({
  palette: {
    primary: { main: "#22333b" },
    secondary: { main: "#0a0908" },
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <Nav />
        <Container>{children}</Container>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
