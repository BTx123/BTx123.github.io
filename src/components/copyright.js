import React from "react";
import Link from "./link";
import useSiteMetadata from "./queries/siteMetadata";
import { Typography } from "@material-ui/core";

export default function Copyright(props) {
  const { url, author } = useSiteMetadata();

  // Use localhost in development environment
  const siteUrl =
    process.env.NODE_ENV == "development" ? "http://localhost:8000" : url;

  return (
    <Typography {...props}>
      {"Copyright © "}
      <Link color="inherit" to={siteUrl}>
        {author}
      </Link>{" "}
      {new Date().getFullYear()}
      {". All Rights Reserved."}
    </Typography>
  );
}
