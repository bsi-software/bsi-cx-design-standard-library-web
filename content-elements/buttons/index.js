const { cx } = require('@bsi-cx/design-build');

const buttonElements = [
    require("./button-filled"),
];

module.exports.buttonElements = buttonElements;
module.exports.buttonGroup = cx.contentElementGroup
  .withGroupId('button-elements-kX7dif')
  .withLabel('Button Elemente')
  .withContentElements(
    ...buttonElements
  );