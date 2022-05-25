const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('figure-caption-size-pjhiIU')
  .withLabel('Caption font size')
  .withCssClasses(
    cx.cssClass
      .withLabel('Small')
      .withCssClass('bsi-caption-small'),
    cx.cssClass
      .withLabel('Medium')
      .withCssClass('bsi-caption-medium'),
    cx.cssClass
      .withLabel('Large')
      .withCssClass('bsi-caption-large'));