import React from "react";

import { Link } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";

import PropTypes from "prop-types";

/**
 * Open external links securely to prevent cross-site hijacking.
 */
export const ExternalLink = (props) => (
  <Link href={props.to} rel="noopener" {...props}>
    {props.children}
  </Link>
);

// ExternalLink.defaultProps = {};

// ExternalLink.propTypes = {
//   to: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

ExternalLink.muiName = Link.muiName;

/**
 * Navigate to internal links with Gatsby optimizations.
 */
// TODO: Fix this
export const InternalLink = React.forwardRef((props, ref) => (
  <Link component={GatsbyLink} ref={ref} {...props}>
    {props.children}
  </Link>
));

// InternalLink.defaultProps = {};

// InternalLink.propTypes = {
//   to: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

InternalLink.muiName = Link.muiName;

// export const ListItemLink = ({ props }) => {
//   const { icon, primary, to } = props;

//   const CustomLink = React.useMemo(
//     () =>
//       React.forwardRef((linkProps, ref) => (
//         <GatsbyLink ref={ref} to={to} {...linkProps} />
//       )),
//     [to]
//   );

//   return (
//     <li>
//       <ListItem button component={CustomLink}>
//         <ListItemIcon>{icon}</ListItemIcon>
//         <ListItemText primary={primary} />
//       </ListItem>
//     </li>
//   );
// };
