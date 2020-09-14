import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const GenericPage = ({ pageContext }) => {
  const { data } = pageContext;
  const { frontmatter, html } = data;

  return (
    <Layout>
      <SEO title={`${frontmatter.title}`} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default GenericPage;
