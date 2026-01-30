const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('new-form-column-amount-51c61f4f')
  .withLabel('Anzahl der Spalten')
  .withCssClasses(
    cx.cssClass
      .withLabel('1 Spalte')
      .withCssClass('new-form-column-amount-1'),
    cx.cssClass
      .withLabel('2 Spalten')
      .withCssClass('new-form-column-amount-2'));