const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-button-alignment-79553e65')
  .withLabel('Formular-Button Ausrichtung')
  .withCssClasses(
    cx.cssClass
      .withLabel('Links')
      .withCssClass('form-button-alignment-start'),
    cx.cssClass
      .withLabel('Mittig')
      .withCssClass('form-button-alignment-center'),   
    cx.cssClass
      .withLabel('Rechts')
      .withCssClass('form-button-alignment-end'),     
    cx.cssClass
      .withLabel('Gleichmäßig verteillt')
      .withCssClass('form-button-alignment-space-between'));