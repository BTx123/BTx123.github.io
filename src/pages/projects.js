import React from "react";

import Typography from "@material-ui/core/Typography";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function ProjectsPage() {
  return (
    <Layout>
      <SEO title="Projects" />
      <Typography variant="h1">Projects</Typography>
      <Typography paragraph>Welcome to the projects page.</Typography>
    </Layout>
  );
}
