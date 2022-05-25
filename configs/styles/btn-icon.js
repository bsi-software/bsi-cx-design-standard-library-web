const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('btn-icon-Fd9wjr')
  .withLabel('Button icon')
  .withCssClasses(
    cx.cssClass
      .withLabel('Hide icon')
      .withCssClass('bsi-btn-icon-hide'),
    cx.cssClass
      .withLabel('Icon left')
      .withCssClass('bsi-btn-icon-left'),
    cx.cssClass
      .withLabel('Icon right')
      .withCssClass('bsi-btn-icon-right'));