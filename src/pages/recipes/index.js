import React from "react";

import { Typography, Grid } from "@material-ui/core";

import { graphql } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import RecipeCard from "../../components/recipeCard";

const Recipes = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;

  const recipes = nodes
    .filter((node) => !!node.frontmatter.datetime) // You can filter your posts based on some criteria
    .map((node) => (
      <Grid item key={node.id} sm={12} md={6} lg={4} xl={3}>
        <RecipeCard
          title={node.frontmatter.title}
          date={node.frontmatter.datetime}
          tags={node.frontmatter.tags}
          excerpt={node.excerpt}
          path={node.frontmatter.path}
        />
      </Grid>
    ));

  return (
    <Layout>
      <SEO title="Recipes" />
      <Typography variant="h1">Recipes</Typography>
      <Typography paragraph>This is the recipes page.</Typography>
      <Grid container spacing={2}>
        {recipes}
      </Grid>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___datetime] }
      filter: { frontmatter: { posttype: { eq: "recipes" } } }
    ) {
      nodes {
        id
        frontmatter {
          datetime(formatString: "MMMM DD, YYYY")
          path
          title
          tags
        }
        excerpt
      }
    }
  }
`;

export default Recipes;
