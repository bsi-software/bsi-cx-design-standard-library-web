const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('image-content-position-OHyiqs')
  .withLabel('Position of image')
  .withCssClasses(
    cx.cssClass
      .withLabel('Top')
      .withCssClass('bsi-image-top'),
    cx.cssClass
      .withLabel('Bottom')
      .withCssClass('bsi-image-bottom'),
    cx.cssClass
      .withLabel('Left')
      .withCssClass('bsi-image-left'),
    cx.cssClass
      .withLabel('Right')
      .withCssClass('bsi-image-right'));