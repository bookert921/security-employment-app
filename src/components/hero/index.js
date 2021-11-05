import React from "react";
import {
  Box,
  useTheme,
  Typography,
  useMediaQuery,
  styled,
  Button,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

import HeroContent from "./HeroContent";

const HeroMain = styled(Box)(({ theme, screen }) => ({
  height: "60vh",
  position: "relative",
  width: "90%",
  margin: screen ? theme.spacing(10) + " auto" : theme.spacing(5) + " auto",
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
    <HeroMain screen={smallerScreen}>
      <StaticImage
        src="../assets/images/secure.jpg"
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
