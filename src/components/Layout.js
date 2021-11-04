import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/lusitana";
import "@fontsource/raleway";
import Nav from "./navigation";

let theme = createTheme({
  palette: {
    primary: { main: "#0077B6", light: "#3D9ACB" },
    secondary: { main: "#B63E00" },
    background: { default: "#F4F6F7" },
  },
  typography: {
    h1: { fontFamily: "Lusitana", fontWeight: "bold" },
    h2: { fontFamily: "Lusitana", fontWeight: "bold" },
    h5: { fontFamily: "Lusitana", fontWeight: "bold" },
    h4: { fontFamily: "Lusitana", fontWeight: "bold" },
    h3: { fontFamily: "Lusitana", fontWeight: "bold" },
    h6: { fontFamily: "Lusitana", fontWeight: "bold" },
    body1: { color: "#00334E", fontWeight: "bold", fontFamily: "Raleway" },
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

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
