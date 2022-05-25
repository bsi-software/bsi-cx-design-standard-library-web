const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-select-placeholder-eKwxSU')
  .withLabel('Placeholder')
  .withCssClasses(
    cx.cssClass
      .withLabel('First entry is placeholder')
      .withCssClass('bsi-placeholder-defined'),
    cx.cssClass
      .withLabel('No placeholder defined')
      .withCssClass('bsi-placeholder-not-defined'));