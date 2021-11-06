import React from "react";
import {
  Typography,
  Grid,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const Paragraph = styled((props) => (
  <Typography variant="body2" {...props} component="p" />
))(({ theme }) => ({
  textIndent: theme.spacing(3),
  marginBottom: theme.spacing(1),
}));

function About() {
  const theme = useTheme();
  const smallerScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Layout>
      <Grid
        container
        sx={{
          width: "100%",
          paddingBottom: "2rem",
          display: "flex",
          flexDirection: smallerScreen ? "column" : "row",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            padding: "2rem",
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ marginBottom: "1rem" }}
          >
            Why Seattle Security ?
          </Typography>
          <Paragraph>
            Mlkshk cornhole banjo farm-to-table blue bottle mixtape, meditation
            shabby chic chicharrones green juice woke succulents meh gluten-free
            hella. Lomo small batch meggings shabby chic whatever scenester.
            Shoreditch hella sustainable brooklyn, typewriter pork belly edison
            bulb hexagon small batch vice crucifix. Street art tote bag
            vexillologist, flexitarian vegan pinterest hella.
          </Paragraph>
          <Paragraph>
            Shaman listicle pok pok, semiotics celiac chia marfa artisan af
            edison bulb drinking vinegar poutine asymmetrical narwhal small
            batch. Try-hard skateboard ethical mustache green juice kombucha.
            Gluten-free pabst austin, aesthetic art party thundercats
            lumbersexual ugh locavore glossier sartorial truffaut four dollar
            toast readymade. Kickstarter occupy kogi disrupt bicycle rights.
            Disrupt you probably haven't heard of them four dollar toast prism
            echo park meditation craft beer pickled tacos heirloom kickstarter
            shabby chic.
          </Paragraph>
          <Paragraph>
            Craft beer master cleanse pitchfork, cliche biodiesel shaman copper
            mug snackwave ugh. Kinfolk banjo bushwick portland. Crucifix blue
            bottle narwhal, you probably haven't heard of them artisan unicorn
            yr occupy venmo lomo pork belly.
          </Paragraph>
        </Grid>
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
            src="../assets/images/community.jpg"
            alt="secure community"
            placeholder="tracedSVG"
            layout="constrained"
            style={{ borderRadius: "10px" }}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default About;
