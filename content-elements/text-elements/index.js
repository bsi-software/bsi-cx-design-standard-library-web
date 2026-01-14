const { cx } = require('@bsi-cx/design-build');

const textElements = [
    require("./body-text"),
];

module.exports.textElements = textElements;
module.exports.textGroup = cx.contentElementGroup
  .withGroupId('text-elements-SFq5xX')
  .withLabel('Text Elemente')
  .withContentElements(
    ...textElements
  );