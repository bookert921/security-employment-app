import React from "react";
import { Typography, Box, useTheme, Grid, Button } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/layout";

function Services() {
  const theme = useTheme();

  return (
    <Layout>
      <Box sx={{ margin: theme.spacing(2) }}>
        <Grid container sx={{ gap: theme.spacing(4) }}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: theme.spacing(2),
                gap: theme.spacing(1),
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ marginBottom: theme.spacing(1) }}
              >
                Serving the King and Snohomish County Area
              </Typography>
              <Typography variant="body2" sx={{ textIndent: theme.spacing(4) }}>
                I'm baby hot chicken PBR&B trust fund iPhone hammock yr franzen
                roof party. Asymmetrical lyft +1 cray pour-over kinfolk
                typewriter vegan yuccie flannel gochujang meggings cliche
                gluten-free. Shaman chicharrones disrupt woke vaporware. Hashtag
                cold-pressed ugh, deep v readymade asymmetrical PBR&B 90's tofu
                umami. Kombucha PBR&B franzen pok pok, disrupt yuccie
                cold-pressed copper mug. Small batch freegan stumptown
                cold-pressed ramps dreamcatcher hoodie artisan portland air
                plant shaman waistcoat. Cred waistcoat freegan ethical meh
                try-hard.
              </Typography>
              <Typography variant="body2" sx={{ textIndent: theme.spacing(4) }}>
                La croix humblebrag venmo adaptogen tacos, art party synth offal
                wayfarers iceland blue bottle. Kickstarter cloud bread blog
                bespoke taxidermy wolf gastropub. Photo booth wolf typewriter la
                croix fashion axe craft beer hexagon four loko. Coloring book
                deep v skateboard mustache live-edge la croix keffiyeh migas
                tote bag irony. Selfies ethical meggings, cornhole umami
                everyday carry af forage stumptown photo booth cardigan
                helvetica. Shaman live-edge sustainable flexitarian four dollar
                toast paleo VHS helvetica.
              </Typography>
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
                src="../assets/images/security-camera.jpg"
                layout="constrained"
                placeholder="tracedSVG"
                alt="security-camera"
                style={{
                  borderRadius: theme.shape.borderRadius,
                  boxShadow: theme.shadows[10],
                }}
              />
            </Grid>
          </Grid>
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
                src="../assets/images/employment.jpg"
                alt="employment"
                layout="constrained"
                placeholder="tracedSVG"
                style={{
                  borderRadius: theme.shape.borderRadius,
                  boxShadow: theme.shadows[10],
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: theme.spacing(2),
                gap: theme.spacing(1),
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ marginBottom: theme.spacing(1) }}
              >
                Customize Your Security Detail
              </Typography>
              <Typography variant="body2" sx={{ textIndent: theme.spacing(4) }}>
                Humblebrag fanny pack hexagon gastropub, organic celiac kale
                chips chambray. Poke master cleanse celiac blue bottle 3 wolf
                moon jean shorts. Kale chips keytar wayfarers seitan. Locavore
                migas waistcoat tilde, squid semiotics post-ironic fam cornhole
                green juice wayfarers echo park venmo live-edge.
              </Typography>
              <ul>
                {[
                  "Subway tile lyft tumeric neutra ennui kombucha copper mug vexillologist cornhole helvetica.",
                  "Butcher before they sold out cardigan woke.",
                  "Taxidermy church-key listicle edison bulb 90's authentic ramps man braid tumeric tbh stumptown woke cred distillery.",
                  "1 glossier migas, humblebrag schlitz hot chicken readymade lomo kombucha pabst brooklyn mlkshk kitsch whatever polaroid.",
                ].map((item, index) => (
                  <li key={index}>
                    <Typography variant="body2" sx={{ mb: theme.spacing(1) }}>
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <Grid item>
              <StaticImage
                src="../assets/images/patrol.jpg"
                placeholder="tracedSVG"
                layout="constrained"
                alt="patrol"
                height={300}
                width={300}
                style={{
                  borderRadius: theme.shape.borderRadius,
                }}
              />
            </Grid>
            <Grid item>
              <StaticImage
                src="../assets/images/seattle-view.jpg"
                placeholder="tracedSVG"
                layout="constrained"
                alt="seattle-view"
                height={300}
                width={300}
                style={{
                  borderRadius: theme.shape.borderRadius,
                }}
              />
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography>Need Security Now?</Typography>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button variant="contained" sx={{ bgcolor: "secondary.main" }}>
                  <Typography variant="h6">Contact Us</Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Services;
