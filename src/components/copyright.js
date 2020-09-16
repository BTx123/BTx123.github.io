import React from "react";
import Typography from "@material-ui/core/Typography";
import { ExternalLink } from "./link";
import useSiteMetadata from "./queries/siteMetadata";

export default function Copyright(props) {
  const { siteUrl, author } = useSiteMetadata();

  // Use localhost in development environment
  const url =
    process.env.NODE_ENV == "development" ? "http://localhost:8000" : siteUrl;

  return (
    <Typography {...props}>
      {"Copyright © "}
      <ExternalLink color="inherit" to={url}>
        {author}
      </ExternalLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
