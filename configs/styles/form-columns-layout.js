const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-columns-layout-b0H3mr')
  .withLabel('Layout of columns')
  .withCssClasses(
    cx.cssClass
      .withLabel('Default')
      .withCssClass('bsi-default-wide'),
    cx.cssClass
      .withLabel('First element wide')
      .withCssClass('bsi-first-wide'),
    cx.cssClass
      .withLabel('Last element wide')
      .withCssClass('bsi-last-wide'));