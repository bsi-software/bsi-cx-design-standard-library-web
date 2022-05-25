const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-radio-inline-1B0AKp')
  .withLabel('Alignment')
  .withCssClasses(
    cx.cssClass
      .withLabel('Radio buttons below each other')
      .withCssClass('bsi-radio-block'),
    cx.cssClass
      .withLabel('Radio buttons next to each other ')
      .withCssClass('bsi-radio-inline'));