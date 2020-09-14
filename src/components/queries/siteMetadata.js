import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          url
          icon
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
