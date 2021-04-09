import React from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { Typography } from "@material-ui/core";

import Layout from "../components/layout";
import SEO from "../components/seo";

const components = {
  img: (props) => <img style={{ width: "100%" }} {...props} />,
  // Img
};
export default function RecipeTemplate({ data }) {
  const { node } = data;

  const formattedPublishedAt = new Date(node.createdAt).toLocaleString();
  const formattedUpdatedAt = new Date(node.updatedAt).toLocaleString();
  return (
    <Layout>
      <SEO title={`${node.title} Recipe`} />
      <Typography variant="h1">{node.title}</Typography>
      <Typography variant="subtitle1">
        Created {formattedPublishedAt}
      </Typography>
      <Typography variant="subtitle1">Updated {formattedUpdatedAt}</Typography>
      <MDXProvider components={components}>
        <MDXRenderer>{node.content.markdownNode.childMdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($recipeId: String!) {
    node: graphCmsRecipe(id: { eq: $recipeId }) {
      id
      title
      createdAt
      updatedAt
      servings
      rating
      tags: recipeTags {
        title
      }
      content {
        markdownNode {
          childMdx {
            body
          }
        }
        html
      }
    }
  }
`;
