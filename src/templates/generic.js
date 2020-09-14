import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function GenericPage({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={`${frontmatter.title}`} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        datetime(formatString: "MMMM DD, YYYY")
        title
        tags
      }
      html
    }
  }
`;
