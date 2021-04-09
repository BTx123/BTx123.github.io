import React from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default function GenericPage({ data }) {
  const { node } = data;

  return (
    <Layout>
      <SEO title={`${node.title}`} />
    </Layout>
  );
}
