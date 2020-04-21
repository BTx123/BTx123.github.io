import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function Footer() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; Brian Tom {new Date().getFullYear()}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Computer Science and Engineering (CSE)
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          University of California, Irvine (UCI)
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;
