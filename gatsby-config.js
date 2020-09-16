module.exports = {
  siteMetadata: {
    title: `Brian Tom`,
    description: `Brian Tom's personal website.`,
    author: `Brian Tom`,
    url: `https://brian-tom.com`,
    icon: `${__dirname}/src/images/icon.png`,
    social: {
      linkedin: {
        username: "briantom123",
        url: "https://www.linkedin.com/in/briantom123",
      },
      github: {
        username: "BTx123",
        url: "https://github.com/BTx123",
      },
      facebook: {
        username: "br14n.t0m",
        url: "https://www.facebook.com/br14n.t0m",
      },
      instagram: {
        username: "bt.x123",
        url: "https://www.instagram.com/bt.x123",
      },
      twitter: {
        username: "bt_x123",
        url: "https://twitter.com/bt_x123",
      },
      spotify: {
        username: "12149414320",
        url: "https://open.spotify.com/user/12149414320",
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      // Place before gatsby-plugin-offline
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brian Tom`,
        short_name: `BT`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#263238`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `recipes`,
        remote: `https://github.com/BTx123/Recipes.git`,
        branch: `master`,
        patterns: `recipes/**/*.md`,
      },
    },
    {
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
