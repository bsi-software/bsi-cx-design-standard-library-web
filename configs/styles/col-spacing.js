const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('col-spacing-k4h6OP')
  .withLabel('Spacing')
  .withCssClasses(
    cx.cssClass
      .withLabel('Show outer spacing (recommended for fixed width)')
      .withCssClass('bsi-space-around-visible'),
    cx.cssClass
      .withLabel('Hide outer spacing (recommended for full width and columns within columns)')
      .withCssClass('bsi-space-around-hide'));