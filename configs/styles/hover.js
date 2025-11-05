const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('hover-mW41Ti')
  .withLabel('Hover')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Hide Hover')*/
      .withLabel('Kein Hervorheben')
      .withCssClass('bsi-table-hover-hide'),
    cx.cssClass
      /*.withLabel('Show Hover')*/
      .withLabel('Anzeigen Hover')
      .withCssClass('bsi-table-hover'));