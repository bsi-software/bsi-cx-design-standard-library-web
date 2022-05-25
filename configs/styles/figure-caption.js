const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('figure-caption-zkZLup')
  .withLabel('Caption')
  .withCssClasses(
    cx.cssClass
      .withLabel('Hide caption')
      .withCssClass('bsi-caption-hide'),
    cx.cssClass
      .withLabel('Show caption below image')
      .withCssClass('bsi-caption-below'),
    cx.cssClass
      .withLabel('Show caption on image with gray overlay')
      .withCssClass('bsi-caption-overlay'),
    cx.cssClass
      .withLabel('Show caption centred on image')
      .withCssClass('bsi-caption-centred'));