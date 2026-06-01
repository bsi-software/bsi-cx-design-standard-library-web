const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-counter-d4zKlL')
  .withLabel('Maximale Zeichenanzahl anzeigen')
  .withCssClasses(
    cx.cssClass
      .withLabel('Ja')
      .withCssClass('bsi-show-max-length-counter'),
    cx.cssClass
      .withLabel('Nein')
      .withCssClass('bsi-hide-max-length-counter'));