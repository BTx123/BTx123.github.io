module.exports = {
  siteMetadata: {
    title: `Brian Tom`,
    titleTemplate: `%s | Brian Tom`,
    description: `Brian Tom's personal website.`,
    author: `Brian Tom`,
    url: `https://brian-tom.com`,
    icon: `${__dirname}/src/images/icon.png`,
    social: {
      linkedin: {
        name: "LinkedIn",
        username: "briantom123",
        url: "https://www.linkedin.com/in/briantom123",
      },
      github: {
        name: "GitHub",
        username: "BTx123",
        url: "https://github.com/BTx123",
      },
      facebook: {
        name: "Facebook",
        username: "br14n.t0m",
        url: "https://www.facebook.com/br14n.t0m",
      },
      instagram: {
        name: "Instagram",
        username: "bt.x123",
        url: "https://www.instagram.com/bt.x123",
      },
      twitter: {
        name: "Twitter",
        username: "bt_x123",
        url: "https://twitter.com/bt_x123",
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
      // 'gatsby-plugin-styled-components',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
