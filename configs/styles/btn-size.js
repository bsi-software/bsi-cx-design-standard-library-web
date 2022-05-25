const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('btn-size-pKDVBL')
  .withLabel('Button size')
  .withCssClasses(
    cx.cssClass
      .withLabel('Small')
      .withCssClass('bsi-btn-size-sm'),
    cx.cssClass
      .withLabel('Medium')
      .withCssClass('bsi-btn-size-md'),
    cx.cssClass
      .withLabel('Large')
      .withCssClass('bsi-btn-size-lg'));