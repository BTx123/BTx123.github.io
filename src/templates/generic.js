import React from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function GenericPage({ data }) {
  // const { mdx } = data;
  // const { frontmatter, body } = mdx;
  // return (
  //   <Layout>
  //     <SEO title={`${frontmatter.title}`} />
  //     <MDXRenderer>{body}</MDXRenderer>
  //   </Layout>
  // );
}

// export const pageQuery = graphql`
//   query($path: String!) {
//     mdx(frontmatter: { path: { eq: $path } }) {
//       frontmatter {
//         datetime(formatString: "MMMM DD, YYYY")
//         title
//         tags
//       }
//       body
//     }
//   }
// `;
