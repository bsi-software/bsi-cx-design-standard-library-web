const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('pin-label-numbering-ba3c80c7')
  /*.withLabel('Numbered label')*/
  .withLabel('Nummerierung')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Show numbering')*/
      .withLabel('Mit Nummerierung')
      .withCssClass('pin-label-visible'),
    cx.cssClass
      /*.withLabel('No numbering')*/
      .withLabel('Ohne Nummerierung')
      .withCssClass('pin-label-invisible'));