/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import useSiteMetadata from "./queries/siteMetadata";

function SEO({ description, lang, title }) {
  const { pathname } = useLocation();
  const siteMetadata = useSiteMetadata();

  const seo = {
    title: title || null,
    description: description || siteMetadata.description,
    author: siteMetadata.author,
    url: `${siteMetadata.url}${pathname}`,
    icon: siteMetadata.icon,
  };

  return (
    <Helmet
      defer={false}
      title={seo.title}
      defaultTitle={siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
    >
      <html lang={lang} />
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:image" content={seo.icon} />
      <meta property="og:image:alt" content="Brian Tom Logo" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string,
};

export default SEO;
