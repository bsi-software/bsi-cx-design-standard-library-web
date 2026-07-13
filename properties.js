module.exports = {
  global: {
    htmlEditor: require("./configs/editor/full"),
  },
  ...require("./content-elements/buttons/properties.js"),
  ...require("./content-elements/layout/properties"),
  ...require("./content-elements/text-elements/properties"),
};
