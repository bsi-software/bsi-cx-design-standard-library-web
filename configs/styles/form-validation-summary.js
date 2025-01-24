const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-validation-summary-cP2la9')
  .withLabel('Validierung')
  .withCssClasses(
    cx.cssClass
      .withLabel('oben zusammenfassen')
      .withCssClass('bsi-form-show-valdiation-summary'),
    cx.cssClass
      .withLabel('nur unter Elementen')
      .withCssClass('bsi-form-hide-valdiation-summary'));