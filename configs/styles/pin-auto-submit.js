const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('pin-auto-submit-ae00c3ca')
  /*.withLabel('Pin auto submit')*/
  .withLabel('automatisch versenden ')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('No auto submit')*/
      .withLabel('nein')
      .withCssClass('default'),
    cx.cssClass
      /*.withLabel('Show auto submit')*/
      .withLabel('ja')
      .withCssClass('auto-submit'));