import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const Portrait = () => (
  <StaticQuery
    query={graphql`
      query {
        portraitImage: file(relativePath: { eq: "portrait.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img
        style={{ borderRadius: "50%" }}
        fluid={data.portraitImage.childImageSharp.fluid}
      />
    )}
  />
);

export default Portrait;
