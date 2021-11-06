import React from "react";
import { CssBaseline, Container, responsiveFontSizes } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/lusitana";
import "@fontsource/raleway";

import Page from "./Page";
import Nav from "../navigation";
import Footer from "./Footer";

let theme = createTheme({
  palette: {
    primary: { main: "#4682B4", light: "#A4C4DE " },
    secondary: { main: "#B44655", light: "#ADB446" },
    background: { default: "#F4F6F7" },
  },
  typography: {
    h1: { fontFamily: "Raleway" },
    h2: { fontFamily: "Raleway" },
    h5: { fontFamily: "Raleway" },
    h4: { fontFamily: "Raleway" },
    h3: { fontFamily: "Raleway" },
    h6: { fontFamily: "Raleway" },
    body1: { color: "#00334E", fontWeight: "bold", fontFamily: "Lusitana" },
    body2: { color: "#00334E", fontFamily: "Lusitana" },
  },
});

theme = createTheme(theme, {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Page>
        <Nav />
        <Container sx={{ marginTop: "2rem" }}>{children}</Container>
        <Footer />
      </Page>
    </ThemeProvider>
  );
};

export default Layout;
