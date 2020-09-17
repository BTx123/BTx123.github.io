import React from "react";

import { Link as GatsbyLink } from "gatsby";

import { Link as MuiLink } from "@material-ui/core";

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = React.forwardRef(
  ({ children, to, activeClassName, partiallyActive, ...other }, ref) => {
    // Test assumes that any internal link (intended for Gatsby)
    // will start with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)/.test(to);
    const file = /\.[0-9a-z]+$/i.test(to);
    // Use Gatsby Link for internal links with check for file downloads
    if (internal) {
      if (file) {
        return (
          <MuiLink component="a" href={to} {...other}>
            {children}
          </MuiLink>
        );
      }
      return (
        <MuiLink
          component={GatsbyLink}
          to={to}
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          ref={ref}
          {...other}
        >
          {children}
        </MuiLink>
      );
    }
    // Use MUI Link for external links
    return (
      <MuiLink href={to} {...other}>
        {children}
      </MuiLink>
    );
  }
);

Link.muiName = MuiLink.muiName;

export default Link;
