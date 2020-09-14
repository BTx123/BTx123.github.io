import React from "react";

import { Typography } from "@material-ui/core";

import SEO from "../components/seo";
import Layout from "../components/layout";

export default function Index() {
  return (
    <Layout>
      <SEO />
      <Typography variant="h1">Home</Typography>
    </Layout>
  );
}
