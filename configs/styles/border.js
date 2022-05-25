const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('border-5CbXuX')
  .withLabel('Border')
  .withCssClasses(
    cx.cssClass
      .withLabel('Hide border')
      .withCssClass('bsi-border-hide'),
    cx.cssClass
      .withLabel('Show border')
      .withCssClass('bsi-border-visible'));