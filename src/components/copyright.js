import React from "react";
import Typography from "@material-ui/core/Typography";
import { ExternalLink } from "./link";
import useSiteMetadata from "./queries/siteMetadata";

export default function Copyright(props) {
  const { url, author } = useSiteMetadata();

  // Use localhost in development environment
  const siteUrl =
    process.env.NODE_ENV == "development" ? "http://localhost:8000" : url;

  return (
    <Typography {...props}>
      {"Copyright © "}
      <ExternalLink color="inherit" to={siteUrl}>
        {author}
      </ExternalLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
