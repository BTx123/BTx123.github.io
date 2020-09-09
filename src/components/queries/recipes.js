import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useRecipes = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 1000, filter: {}) {
        nodes {
          html
          frontmatter {
            active
            category
            servings
            title
            rating
            total
            url
          }
        }
      }
    }
  `);
  return data.allMarkdownRemark.nodes;
};

export default useRecipes;
