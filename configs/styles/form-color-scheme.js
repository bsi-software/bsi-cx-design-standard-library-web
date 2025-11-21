const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-color-477189d5')
  /*.withLabel('Form color')*/
  .withLabel('Formular Farbschema')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Primary color')*/
      .withLabel('Hell')
      .withCssClass('form-scheme-light'),
    cx.cssClass
      /*.withLabel('Secondary color')*/
      .withLabel('Dunkel')
      .withCssClass('form-scheme-dark'));