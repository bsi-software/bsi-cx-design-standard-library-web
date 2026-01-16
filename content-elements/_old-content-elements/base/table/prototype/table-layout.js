const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('table-layout-0c925c61')
  /*.withLabel('Color')*/
  .withLabel('Mobiler Umbruch')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Primary color')*/
      .withLabel('Ja')
      .withCssClass('bsi-table-mobile'),
    cx.cssClass
      /*.withLabel('Secondary color')*/
      .withLabel('Nein')
      .withCssClass('bsi-table-desktop-only'));