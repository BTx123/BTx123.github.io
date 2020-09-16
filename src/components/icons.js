import React from "react";

import MuiLinkedInIcon from "@material-ui/icons/LinkedIn";
import MuiGitHubIcon from "@material-ui/icons/GitHub";
import MuiFacebookIcon from "@material-ui/icons/Facebook";
import MuiInstagramIcon from "@material-ui/icons/Instagram";
import MuiContactlessIcon from "@material-ui/icons/Contactless";

export const FacebookIcon = (props) => {
  return <MuiFacebookIcon style={{ color: "#4267B2" }} {...props} />;
};

export const InstagramIcon = (props) => {
  return <MuiInstagramIcon style={{ color: "#e1306c" }} {...props} />;
};

export const LinkedInIcon = (props) => {
  return <MuiLinkedInIcon style={{ color: "#2867b2" }} {...props} />;
};

export const GitHubIcon = (props) => {
  return <MuiGitHubIcon style={{ color: "#333333" }} {...props} />;
};

export const SpotifyIcon = (props) => {
  return (
    <MuiContactlessIcon
      style={{ color: "#1DB954", transform: "rotate(-90deg)" }}
      {...props}
    />
  );
};
