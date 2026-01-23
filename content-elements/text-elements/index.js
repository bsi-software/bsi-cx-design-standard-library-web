const { cx } = require('@bsi-cx/design-build');

const textElements = [
    require("./body-text"),
    require("./headlines/h1"),
];

module.exports.textElements = textElements;
module.exports.textGroup = cx.contentElementGroup
  .withGroupId('text-elements')
  .withLabel('Text Elemente')
  .withContentElements(
    ...textElements
  );