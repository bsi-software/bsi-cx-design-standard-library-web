const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('icon-color-RlaUth')
  .withLabel('Icon color')
  .withCssClasses(
    cx.cssClass
      .withLabel('Primary color')
      .withCssClass('bsi-icon-color-primary'),
    cx.cssClass
      .withLabel('Secondary color')
      .withCssClass('bsi-icon-color-secondary'),
    cx.cssClass
      .withLabel('Dark')
      .withCssClass('bsi-icon-color-dark'),
    cx.cssClass
      .withLabel('Light')
      .withCssClass('bsi-icon-color-light'));