const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-btn-layout-jhPPtY')
  .withLabel('Button layout')
  .withCssClasses(
    cx.cssClass
      .withLabel('Filled')
      .withCssClass('bsi-form-btn-filled'),
    cx.cssClass
      .withLabel('Outline')
      .withCssClass('bsi-form-btn-outline'));