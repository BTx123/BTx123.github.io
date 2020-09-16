import React from "react";

import { Grid, Typography, Hidden } from "@material-ui/core";

import Copyright from "./copyright";
import useSiteMetadata from "./queries/siteMetadata";
import { ExternalLink } from "./link";
import {
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  SpotifyIcon,
} from "../components/icons";

const Footer = () => {
  const { social } = useSiteMetadata();

  const { linkedin, github, facebook, instagram, spotify } = social;

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={1}
      component="footer"
    >
      <Grid container item direction="row" md={6} lg={4} xl={3} spacing={1}>
        {[linkedin, github, facebook, instagram, spotify].map((social) => (
          <Grid container item xs sm={6} justify="center" key={social.url}>
            <ExternalLink to={social.url}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  {(() => {
                    switch (social) {
                      case linkedin:
                        return <LinkedInIcon />;
                      case github:
                        return <GitHubIcon />;
                      case facebook:
                        return <FacebookIcon />;
                      case instagram:
                        return <InstagramIcon />;
                      case spotify:
                        return <SpotifyIcon />;
                    }
                  })()}
                </Grid>
                <Grid item>
                  <Hidden only="xs">
                    <Typography variant="body2" color="textSecondary">
                      {social.username}
                    </Typography>
                  </Hidden>
                </Grid>
              </Grid>
            </ExternalLink>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Copyright variant="body2" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Created with{" "}
          <ExternalLink to="https://www.gatsbyjs.com/" color="inherit">
            GatsbyJS
          </ExternalLink>
          .
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
