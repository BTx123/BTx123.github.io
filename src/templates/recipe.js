import React from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { Img } from "gatsby-image";

import { Typography } from "@material-ui/core";

import Layout from "../components/layout";
import SEO from "../components/seo";

const components = {
  img: (props) => <img style={{ width: "100%" }} {...props} />,
};
export default function RecipeTemplate({ data }) {
  const { node } = data;

  const formattedPublishedAt = new Date(node.publishedAt).toLocaleString();
  console.log(node.content.html);
  return (
    <Layout>
      <SEO title={`${node.title} Recipe`} />
      <Typography variant="h1">{node.title}</Typography>
      <Typography variant="subtitle1">
        Published {formattedPublishedAt}
      </Typography>
      {/* <MDXRenderer>{node.content.markdownNode.childMdx.body}</MDXRenderer> */}
      {/* <MDXProvider>{node.content.html}</MDXProvider> */}
      <MDXProvider components={components}>
        <Typography dangerouslySetInnerHTML={{ __html: node.content.html }} />
      </MDXProvider>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($recipeId: String!) {
    node: graphCmsRecipe(id: { eq: $recipeId }) {
      id
      title
      publishedAt
      servings
      rating
      tags
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
