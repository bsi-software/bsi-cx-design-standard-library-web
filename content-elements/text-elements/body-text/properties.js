const { bsiLoremIpsum } = require("@bsi-cx/design-build");

module.exports.bodyText = {
  label: {
    element: "Text",
    text: "Text",
  },
  prefill: {
    text: bsiLoremIpsum(20),
  },
  options: {},
};
