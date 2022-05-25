const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('table-color-xmCwub')
  .withLabel('Color')
  .withCssClasses(
    cx.cssClass
      .withLabel('Primary color')
      .withCssClass('bsi-table-primary'),
    cx.cssClass
      .withLabel('Secondary color')
      .withCssClass('bsi-table-secondary'),
    cx.cssClass
      .withLabel('Dark')
      .withCssClass('bsi-table-dark'),
    cx.cssClass
      .withLabel('Light')
      .withCssClass('bsi-table-light'));