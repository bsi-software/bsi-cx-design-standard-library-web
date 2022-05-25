const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('btn-width-wdOcZR')
  .withLabel('Button width')
  .withCssClasses(
    cx.cssClass
      .withLabel('Default')
      .withCssClass('bsi-btn-width-default'),
    cx.cssClass
      .withLabel('Wide')
      .withCssClass('bsi-btn-width-wide'));