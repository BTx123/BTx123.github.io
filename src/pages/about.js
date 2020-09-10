import React from "react";

import Typography from "@material-ui/core/Typography";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <Typography variant="h1">About</Typography>
      <Typography paragraph>Welcome to the about page.</Typography>
    </Layout>
  );
}
