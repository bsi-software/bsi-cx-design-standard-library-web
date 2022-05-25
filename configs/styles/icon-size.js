const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('icon-size-SnWsSL')
  .withLabel('Icon size')
  .withCssClasses(
    cx.cssClass
      .withLabel('Small')
      .withCssClass('bsi-icon-size-small'),
    cx.cssClass
      .withLabel('Medium')
      .withCssClass('bsi-icon-size-medium'),
    cx.cssClass
      .withLabel('Large')
      .withCssClass('bsi-icon-size-large'));