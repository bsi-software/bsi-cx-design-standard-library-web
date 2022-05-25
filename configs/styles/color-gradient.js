const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('color-gradient-oDMf9h')
  .withLabel('Color gradient')
  .withCssClasses(
    cx.cssClass
      .withLabel('Hide gradient')
      .withCssClass('bsi-gradient-hide'),
    cx.cssClass
      .withLabel('Show gradient to bottom')
      .withCssClass('bsi-gradient-to-bottom'),
    cx.cssClass
      .withLabel('Show gradient to top')
      .withCssClass('bsi-gradient-to-top'),
    cx.cssClass
      .withLabel('Show gradient to bottom and top')
      .withCssClass('bsi-gradient-to-bottom-and-top'));