const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('text-size-h1-FPFxdy')
  .withLabel('Text size')
  .withCssClasses(
    cx.cssClass
      .withLabel('Regular')
      .withCssClass('bsi-default'),
    cx.cssClass
      .withLabel('Large')
      .withCssClass('display-1'));