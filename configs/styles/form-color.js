const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-color-sBgs6f')
  .withLabel('Form color')
  .withCssClasses(
    cx.cssClass
      .withLabel('Primary color')
      .withCssClass('bsi-form-color-primary'),
    cx.cssClass
      .withLabel('Secondary color')
      .withCssClass('bsi-form-color-secondary'));