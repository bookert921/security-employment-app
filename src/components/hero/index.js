import React from "react";
import {
  useTheme,
  Typography,
  useMediaQuery,
  styled,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

import HeroContent from "./HeroContent";

const HeroMain = styled(Box)(() => ({
  height: "70vh",
  position: "relative",
  marginBottom: "3rem",
}));

const HeroContainer = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.4)",
  borderRadius: "0.25rem",
}));

function Hero({ heroText }) {
  const theme = useTheme();
  const smallerScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const renderHeroText = heroText.map((text, index) => (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: smallerScreen ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
      key={index}
    >
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StaticImage
          src="../../assets/images/checkbox.svg"
          alt="checkbox"
          layout="fixed"
          placeholder="tracedSVG"
          height={50}
          width={50}
        />
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography color="primary.contrastText">{text}</Typography>
      </Grid>
    </Grid>
  ));
  return (
    <HeroMain screen={smallerScreen}>
      <StaticImage
        src="../../assets/images/secure.jpg"
        alt="security"
        layout="constrained"
        placeholder="tracedSVG"
        style={{ height: "100%", borderRadius: "0.25rem" }}
      />
      <HeroContainer>
        <HeroContent
          smallerScreen={smallerScreen}
          componentLeft={
            <Button variant="contained" size="large" color="secondary">
              <Typography variant="h5">Get Quote</Typography>
            </Button>
          }
          componentRight={renderHeroText}
        />
      </HeroContainer>
    </HeroMain>
  );
}

export default Hero;
