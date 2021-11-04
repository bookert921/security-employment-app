import React from "react";
import { Box, useTheme, Grid, Typography, useMediaQuery } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

const heroText = [
  "24/7 On-Site Security Guards",
  "Locally Managed",
  "Certified Professionals",
];

export default function Home() {
  const theme = useTheme();
  const smallerScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const renderHeroText = heroText.map((text, index) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
      key={index}
    >
      <StaticImage
        src="../assets/images/checkbox.svg"
        alt="checkbox"
        layout="constrained"
        placeholder="tracedSVG"
        height={50}
        width={50}
      />
      <Typography color="primary.contrastText" ml={2}>
        {text}
      </Typography>
    </Box>
  ));

  return (
    <Layout>
      <Box
        role="banner"
        sx={{
          width: "90%",
          margin: smallerScreen
            ? theme.spacing(10) + " auto"
            : theme.spacing(5) + " auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, .4)",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
          }}
        ></Box>
        <StaticImage
          src="../assets/images/space-needle.jpg"
          alt="security"
          layout="fullWidth"
        />
        <Grid
          container
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <Grid item sm={6}></Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            {renderHeroText}
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
