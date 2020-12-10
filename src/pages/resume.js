import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Box, Container, Typography } from "@material-ui/core";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from "../components/link";

const ResumePage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Resume" />
      <Typography variant="h1">Resume</Typography>
      <Container maxWidth="sm">
        <Typography paragraph>Click below to download my resume.</Typography>
        <Box border={1}>
          <Link to={data.pdf.publicURL} download>
            <Img
              fluid={data.image.childImageSharp.fluid}
              alt="Brian Tom's Resume"
            />
          </Link>
        </Box>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    image: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "Brian Tom 20201109.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    pdf: file(
      sourceInstanceName: { eq: "data" }
      relativePath: { eq: "Brian Tom 20201109.pdf" }
    ) {
      name
      publicURL
    }
  }
`;

export default ResumePage;
