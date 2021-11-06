import React from "react";
import {
  TextField,
  useTheme,
  Typography,
  Paper,
  Button,
  Grid,
} from "@mui/material";

import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function Contact() {
  const theme = useTheme();

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
            placeholder="dominantColor"
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
            >
              <Typography variant="h6" fontWeight="bold">
                Tell Us How We Can Help
              </Typography>
              <TextField
                label="Name"
                type="text"
                variant="filled"
                size="small"
                fullWidth
              />
              <TextField
                label="Email"
                type="email"
                variant="filled"
                size="small"
                fullWidth
              />
              <TextField
                multiline
                rows={5}
                maxRows={10}
                variant="filled"
                label="Message"
                fullWidth
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ backgroundColor: "secondary.main" }}
              >
                Send
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Contact;
