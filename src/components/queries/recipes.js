import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useRecipes = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            active
            servings
            rating
            total
            url
            path
            title
            tags
            posttype
            datetime
            datetimeFromNow: datetime(fromNow: true)
          }
          html
        }
      }
    }
  `);
  return data.allMarkdownRemark.nodes;
};

export default useRecipes;
