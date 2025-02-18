const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('pin-auto-submit-ae00c3ca')
  /*.withLabel('Footer gradient')*/
  .withLabel('automatisch versenden ')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('No gradient')*/
      .withLabel('nein')
      .withCssClass('default'),
    cx.cssClass
      /*.withLabel('Show gradient')*/
      .withLabel('ja')
      .withCssClass('auto-submit'));