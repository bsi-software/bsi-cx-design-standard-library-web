const { cx } = require("@bsi-cx/design-build");

const layoutElements = [
  require("./grid"),
  require("./column"),
  require("./template-parts/grid"),
  require("./template-parts/column"),
];

module.exports.layoutElements = layoutElements;
module.exports.layoutGroup = cx.contentElementGroup
  .withGroupId("layout-elements-1f3c625c")
  .withLabel("Layout Elemente")
  .withContentElements(...layoutElements);
