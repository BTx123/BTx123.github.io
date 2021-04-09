import React from "react";

import { Grid } from "@material-ui/core";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Portrait from "../components/portrait";

import useSiteMetadata from "../components/queries/siteMetadata";

export default function Index() {
  const { url, author } = useSiteMetadata();
  const first = author.split(" ")[0];

  return (
    <Layout>
      <SEO title="Home" />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item sm={12} md={3} style={{ maxWidth: "300px" }}>
          <Portrait />
        </Grid>
        <Grid item sm={12} md={9} spacing={6}>
          {author} is a Software Engineer who works with [who you help] to [how
          you help them].
          <Grid item>
            {first} [knows/believes] [what you know/believe about the work you
            do].
          </Grid>
          <Grid item>
            {first} has [landed/secured/garnered/worked at/supported] [insert
            your most compelling experiences and wins].
          </Grid>
          <Grid item>
            {first} is a [trained/certified/awarded] [insert relevant trainings,
            awards, honors, etc].
          </Grid>
          <Grid item>
            {first} holds a BS in Computer Science and Engineering from the
            University of California, Irvine.
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
