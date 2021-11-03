import React from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Nav from "./Navigation";
import "@fontsource/roboto";
import NavV2 from "./NavV2";

let theme = createTheme({
  palette: {
    primary: { main: "#0077B6", light: "#3D9ACB" },
    secondary: { main: "#B63E00" },
    background: { default: "#F4F6F7" },
  },
  typography: {
    body1: { fontFamily: "sans-serif", color: "#00334E", fontWeight: "bold" },
  },
});

theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.dark,
        },
      },
    },
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        {/* <Nav /> */}
        <NavV2 />
        <Container>{children}</Container>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
