import React, { useState } from "react";
import {
  TextField,
  useTheme,
  Typography,
  Paper,
  Button,
  Grid,
  Alert,
  Snackbar,
} from "@mui/material";

import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function Contact() {
  const theme = useTheme();
  const [inputChange, setInputChange] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setInputChange({ ...inputChange, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSent(false);
  };

  return (
    <Layout>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StaticImage
            src="../assets/images/pike-place.jpg"
            placeholder="tracedSVG"
            alt="pike-place"
            layout="constrained"
            style={{
              borderRadius: theme.shape.borderRadius,
              boxShadow: theme.shadows[10],
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              padding: theme.spacing(2),
              margin: theme.spacing(4),
              borderRadius: theme.shape.borderRadius,
            }}
          >
            <form
              style={{
                gap: theme.spacing(2),
                flexDirection: "column",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
              onSubmit={handleSubmit}
            >
              <Typography variant="h6" fontWeight="bold">
                Tell Us How We Can Help
              </Typography>
              <TextField
                name="name"
                label="Name"
                type="text"
                variant="filled"
                size="small"
                fullWidth
                value={inputChange.name}
                onChange={handleChange}
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="filled"
                size="small"
                fullWidth
                value={inputChange.email}
                onChange={handleChange}
              />
              <TextField
                name="message"
                multiline
                rows={5}
                variant="filled"
                label="Message"
                fullWidth
                value={inputChange.message}
                onChange={handleChange}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ backgroundColor: "secondary.main" }}
                type="submit"
              >
                Send
              </Button>
            </form>
          </Paper>
        </Grid>
        <Snackbar
          open={sent}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          <Alert onClose={handleClose} severity="success">
            Sent Successfully!
          </Alert>
        </Snackbar>
      </Grid>
    </Layout>
  );
}

export default Contact;
