import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Typography } from "@material-ui/core";
import { graphql } from "gatsby";

export default function RecipeTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={`${frontmatter.title} Recipe`} />
      <Typography variant="h1">{frontmatter.title}</Typography>
      <Typography variant="subtitle1">
        Published {frontmatter.datetime} | {frontmatter.datetimeFromNow}
      </Typography>
      <Typography dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        datetime(formatString: "MMMM DD, YYYY")
        datetimeFromNow: datetime(fromNow: true)
        title
        rating
        servings
        active
        total
        url
        tags
      }
      html
    }
  }
`;
