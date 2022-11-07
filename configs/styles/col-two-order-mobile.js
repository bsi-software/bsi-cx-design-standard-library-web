const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('col-two-order-mobile-vo40Cv')
  /*.withLabel('Swap column order')*/
  .withLabel('Spaltenreihenfolge tauschen')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('No')*/
      .withLabel('Nein')
      .withCssClass('bsi-mobile-order-default'),
    cx.cssClass
      /*.withLabel('On mobile devices')*/
      .withLabel('Auf mobilen Geräten')
      .withCssClass('bsi-mobile-order-swapped'));