/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Resolves warning referenced here: https://github.com/gatsbyjs/gatsby/issues/11934
// React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    });
  }
};

// Programmatically generates pages from markdown
exports.createPages = async function ({ actions, graphql, reporter }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___datetime] }
        limit: 1000
      ) {
        nodes {
          frontmatter {
            path
            posttype
          }
        }
      }
    }
  `);

  // Handle errors
  if (data.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  data.allMarkdownRemark.nodes.forEach((node) => {
    const { path, posttype } = node.frontmatter;
    if (path !== null) {
      switch (posttype) {
        case "recipes":
          actions.createPage({
            path: path,
            component: require.resolve(`./src/templates/recipe.js`),
            context: { path: path },
          });
          break;
        default:
          actions.createPage({
            path: path,
            component: require.resolve(`./src/templates/generic.js`),
            context: { path: path },
          });
          break;
      }
    }
  });
};
