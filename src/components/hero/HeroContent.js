import React from "react";
import { Grid } from "@mui/material";

const HeroContent = ({ componentLeft, componentRight, smallerScreen }) => {
  return (
    <Grid
      container
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: smallerScreen ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={4}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {componentLeft}
      </Grid>
      <Grid
        item
        xs={8}
        sm={6}
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {componentRight}
      </Grid>
    </Grid>
  );
};

export default HeroContent;
