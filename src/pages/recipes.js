import React from "react";

import { Typography, Grid } from "@material-ui/core";

import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import RecipeCard from "../components/recipeCard";

export default function RecipesPage({ data }) {
  const { nodes } = data.allGraphCmsRecipe;

  const recipes = nodes.map((node) => (
    <Grid item key={node.id} sm={12} md={6} lg={4} xl={3}>
      <RecipeCard
        title={node.title}
        date={node.publishedAt ? node.publishedAt : node.createdAt}
        rating={node.rating}
        tags={node.tags}
        excerpt={node.content.markdownNode.childMdx.excerpt}
        coverImage={node.coverImage.localFile.childImageSharp.fluid}
        path={`/recipes/${node.remoteId}`}
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
}

export const pageQuery = graphql`
  query {
    allGraphCmsRecipe(
      sort: { fields: [publishedAt, createdAt], order: [DESC, DESC] }
    ) {
      nodes {
        id
        remoteId
        title
        createdAt
        publishedAt
        rating
        tags
        coverImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 700, quality: 100) {
                src
              }
            }
          }
        }
        content {
          markdownNode {
            childMdx {
              excerpt
            }
          }
        }
      }
    }
  }
`;
