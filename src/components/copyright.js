import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import useSiteMetadata from "./queries/siteMetadata";

export default function Copyright() {
  const { siteUrl, author } = useSiteMetadata();
  // Use localhost in development environment
  const url =
    process.env.NODE_ENV == "development" ? "http://localhost:8000" : siteUrl;

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href={url}>
        {author}
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
