import React from "react";

import {
  Button,
  TextField,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "../components/layout";
import SEO from "../components/seo";

const useStyles = makeStyles((theme) => ({
  form: {
    [theme.breakpoints.up("md")]: {
      maxWidth: theme.breakpoints.values.md,
    },
  },
}));

const ContactPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Contact">
        {/* TODO: Fix null getElementById when switching pages - unload js somehow, move out of seo? */}
        {/* <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=6Leq_soZAAAAAODOc50hERWjUQPLtvaS_9jMOVv3"></script> */}
        {/* <script>
          {`function onloadCallback() {
            grecaptcha.ready(() => {
              grecaptcha
                .execute("6Leq_soZAAAAAODOc50hERWjUQPLtvaS_9jMOVv3", { action: "submit" })
                .then((token) => {
                  document.getElementById("captchaResponse").value = token;
                });
            });
          }`}
        </script> */}
      </SEO>
      <Typography variant="h1">Contact</Typography>
      <Container maxWidth="md">
        <Typography paragraph>
          Send me a message with the form below and I will get back to you
          shortly!
        </Typography>
        <Grid
          container
          spacing={3}
          component="form"
          id="contact-form"
          action="https://getform.io/f/7298802e-2179-4ed9-ba33-9165417b6832"
          method="POST"
        >
          <input
            type="hidden"
            id="captchaResponse"
            name="g-recaptcha-response"
          ></input>
          <Grid item xs={12} md={6}>
            <TextField
              type="text"
              name="name"
              label="Name"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="message"
              label="Message"
              variant="filled"
              multiline
              fullWidth
              rows={5}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              // component="button"
              // className="g-recaptcha"
              // data-sitekey="6Leq_soZAAAAAODOc50hERWjUQPLtvaS_9jMOVv3"
              // data-callback="onSubmit"
              // data-action="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ContactPage;
