import React from "react";
import Copyright from "./copyright";
import { Grid, Typography } from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";

export default function Footer() {
  return (
    <footer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Copyright />
          <Typography variant="body2" color="textSecondary" align="center">
            Created with{" "}
            <MuiLink color="inherit" href="https://www.gatsbyjs.com/">
              GatsbyJS.
            </MuiLink>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
