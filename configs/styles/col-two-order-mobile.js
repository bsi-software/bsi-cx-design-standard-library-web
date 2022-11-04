const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('col-two-order-mobile-vo40Cv')
  /*.withLabel('Swap the order of columns on mobile devices')*/
  .withLabel('Vertausche die Reihenfolge der Spalten auf mobilen Geräten')
  .withCssClasses(
    cx.cssClass
      .withLabel('Nein')
      .withCssClass('bsi-mobile-order-default'),
    cx.cssClass
      .withLabel('Ja')
      .withCssClass('bsi-mobile-order-swapped'));