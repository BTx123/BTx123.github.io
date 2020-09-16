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
          social {
            facebook {
              username
              url
            }
            github {
              username
              url
            }
            instagram {
              username
              url
            }
            linkedin {
              username
              url
            }
            spotify {
              username
              url
            }
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
};

export default useSiteMetadata;
