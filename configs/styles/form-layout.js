const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-layout-1tsmut')
  .withLabel('Form layout')
  .withCssClasses(
    cx.cssClass
      .withLabel('Card')
      .withCssClass('bsi-form-card-visible'),
    cx.cssClass
      .withLabel('Plain')
      .withCssClass('bsi-form-card-hide'));