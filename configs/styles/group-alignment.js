const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-group-alignment-7ed31a87')
  .withLabel('Formular-Gruppen Ausrichtung')
  .withCssClasses(
    cx.cssClass
      .withLabel('Untereinander')
      .withCssClass('form-group-alignment-vertical'),
    cx.cssClass
      .withLabel('Nebeneinander')
      .withCssClass('form-group-alignment-horizontal'));