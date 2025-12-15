const layoutElements = [
    require("./grid"),
    require("./column"),
];

module.exports.layoutElements = layoutElements;
module.exports.group = cx.layoutElementGroup
  .withGroupId('layout-elements-6657fcec')
  .withLabel('Layout Elemente')
  .withContentElements(
    ...layoutElements
  );