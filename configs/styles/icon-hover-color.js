const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('icon-hover-color-oUrelW')
  .withLabel('Icon hover color')
  .withCssClasses(
    cx.cssClass
      .withLabel('Primary color')
      .withCssClass('bsi-icon-hover-color-primary'),
    cx.cssClass
      .withLabel('Secondary color')
      .withCssClass('bsi-icon-hover-color-secondary'),
    cx.cssClass
      .withLabel('Dark')
      .withCssClass('bsi-icon-hover-color-dark'),
    cx.cssClass
      .withLabel('Light')
      .withCssClass('bsi-icon-hover-color-light'));