import React from "react";
import Copyright from "./copyright";
import { Typography } from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";

export default function Footer() {
  return (
    <footer>
      <Copyright />
      <Typography variant="body2" color="textSecondary" align="center">
        Created with{" "}
        <MuiLink color="inherit" href="https://www.gatsbyjs.com/">
          GatsbyJS.
        </MuiLink>
      </Typography>
    </footer>
  );
}
