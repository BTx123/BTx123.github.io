import React from "react";

import Layout from "../components/layout";

import SEO from "../components/seo";
import { Typography } from "@material-ui/core";

export default function ProjectsPage() {
  return (
    <Layout>
      <SEO title="Projects" />
      <Typography variant="h1">Projects</Typography>
      <Typography paragraph>Welcome to the projects page.</Typography>
    </Layout>
  );
}
