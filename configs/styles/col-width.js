const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('col-width-pv2OCc')
  .withLabel('Layout width')
  .withCssClasses(
    cx.cssClass
      .withLabel('Fixed width')
      .withCssClass('container'),
    cx.cssClass
      .withLabel('Full width')
      .withCssClass('container-fluid'));