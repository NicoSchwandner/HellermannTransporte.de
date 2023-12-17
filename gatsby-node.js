const path = require("path");

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig();
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "src/components"),
      // Add other aliases if needed
    },
  };
  actions.replaceWebpackConfig(config);
};
