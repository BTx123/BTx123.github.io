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
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            path
            active
            category
            rating
            servings
            total
            url
          }
          html
        }
      }
    }
  `);
  data.allMarkdownRemark.nodes.forEach((node) => {
    const path = frontmatter.path;
    actions.createPage({
      path: path,
      component: require.resolve(`./src/templates/recipes.js`),
      context: { recipe: node },
    });
  });
};
