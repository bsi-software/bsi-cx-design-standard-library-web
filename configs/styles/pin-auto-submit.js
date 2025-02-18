const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('pin-auto-submit-ae00c3ca')
  /*.withLabel('Pin auto submit')*/
  .withLabel('Automatisch versenden ')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('No auto submit')*/
      .withLabel('Nein')
      .withCssClass('default'),
    cx.cssClass
      /*.withLabel('Show auto submit')*/
      .withLabel('Ja')
      .withCssClass('auto-submit'));