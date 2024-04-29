const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('pin-label-numbering-ba3c80c7')
  /*.withLabel('Footer gradient')*/
  .withLabel('Nummerierung')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('No gradient')*/
      .withLabel('Mit Nummerierung')
      .withCssClass('pin-label-visible'),
    cx.cssClass
      /*.withLabel('Show gradient')*/
      .withLabel('Ohne Nummerierung')
      .withCssClass('pin-label-invisible'));