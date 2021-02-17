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

// Replacing '/' would result in empty string which is invalid
const replacePath = (path) => (path === `/` ? path : path.replace(/\/$/, ``));
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const oldPage = Object.assign({}, page);
  // Remove trailing slash unless page is /
  page.path = replacePath(page.path);
  if (page.path !== oldPage.path) {
    // Replace old page with new page
    deletePage(oldPage);
    createPage(page);
  }
};

// Programmatically generates pages from markdown
exports.createPages = async function ({ actions, graphql, reporter }) {
  const result = await graphql(`
    query {
      allGraphCmsRecipe {
        nodes {
          id
          remoteId
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Templates
  const genericTemplate = require.resolve(`./src/templates/generic.js`);
  const recipeTemplate = require.resolve(`./src/templates/recipe.js`);

  // Create recipe pages
  result.data.allGraphCmsRecipe.nodes.forEach((node) => {
    actions.createPage({
      path: `/recipes/${node.remoteId}`,
      component: recipeTemplate,
      context: { recipeId: node.id },
    });
  });
};
