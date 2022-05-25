const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('btn-color-eTXeUU')
  .withLabel('Button color')
  .withCssClasses(
    cx.cssClass
      .withLabel('Primary color')
      .withCssClass('bsi-btn-color-primary'),
    cx.cssClass
      .withLabel('Secondary color')
      .withCssClass('bsi-btn-color-secondary'),
    cx.cssClass
      .withLabel('Dark')
      .withCssClass('bsi-btn-color-dark'),
    cx.cssClass
      .withLabel('Light')
      .withCssClass('bsi-btn-color-light'));