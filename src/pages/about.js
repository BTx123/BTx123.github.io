import React from "react";

import Layout from "../components/layout";

import SEO from "../components/seo";
import { Typography } from "@material-ui/core";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Typography variant="h1">About</Typography>
      <Typography paragraph>Welcome to the about page.</Typography>
    </Layout>
  );
};

export default AboutPage;
