module.exports = {
  siteMetadata: {
    title: `Brian Tom`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      // Place before gatsby-plugin-offline
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brian Tom`,
        short_name: `BT`,
        start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        display: `standalone`,
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
  ],
};
