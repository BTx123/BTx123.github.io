require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log(process.env.GATSBY_ENDPOINT);

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
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_REFRESH: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`], // ignore files starting with a dot
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
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        downloadLocalImages: true,
        buildMarkdownNodes: true,
      },
    },
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
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      resolve: `gatsby-plugin-material-ui`,
      // options: {
      //   stylesProvider: {
      //     injectFirst: true,
      //   },
      // },
    },
    // `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
            },
          },
        ],
      },
    },
    // `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
