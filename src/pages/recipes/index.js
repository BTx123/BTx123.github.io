import React from "react";

import Layout from "../../components/layout";
import Image from "../../components/image";
import SEO from "../../components/seo";
import { Typography } from "@material-ui/core";

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes" />
      <Typography variant="h1">Recipes</Typography>
      <Typography paragraph>This is the recipes page.</Typography>
    </Layout>
  );
};

export default Recipes;
