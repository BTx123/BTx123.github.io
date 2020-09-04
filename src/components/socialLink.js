import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import ExternalLink from "./externalLink";

const SocialLink = ({ socialName, icon }) => {
  const { site } = useStaticQuery(query);
  const social = site.siteMetadata.social[socialName];
  return <ExternalLink href={social.url}>{icon}</ExternalLink>;
};

SocialLink.defaultProps = {};

SocialLink.propTypes = {
  socialName: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export const FacebookLink = () => (
  <SocialLink socialName="facebook" icon={<FacebookIcon />}></SocialLink>
);

export const InstagramLink = () => (
  <SocialLink socialName="instagram" icon={<InstagramIcon />}></SocialLink>
);

export const LinkedInLink = () => (
  <SocialLink socialName="linkedin" icon={<LinkedInIcon />}></SocialLink>
);

export const GitHubLink = () => (
  <SocialLink socialName="github" icon={<GitHubIcon />}></SocialLink>
);

const query = graphql`
  query {
    site {
      siteMetadata {
        social {
          facebook {
            name
            username
            url
          }
          github {
            name
            username
            url
          }
          instagram {
            name
            username
            url
          }
          linkedin {
            name
            username
            url
          }
        }
      }
    }
  }
`;
