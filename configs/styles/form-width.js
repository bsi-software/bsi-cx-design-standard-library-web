const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-width-SYWW29')
  .withLabel('Form width')
  .withCssClasses(
    cx.cssClass
      .withLabel('Wide')
      .withCssClass('bsi-form-wide'),
    cx.cssClass
      .withLabel('Slim')
      .withCssClass('bsi-form-slim'));