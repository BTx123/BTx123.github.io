import React from "react";
import Link from "@material-ui/core/Link";

import PropTypes from "prop-types";

/**
 * Open links securely to prevent cross-site hijacking.
 */
const ExternalLink = ({ href, children }) => {
  return (
    <Link href={href} rel="noopener">
      {children}
    </Link>
  );
};

ExternalLink.defaultProps = {};

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExternalLink;
