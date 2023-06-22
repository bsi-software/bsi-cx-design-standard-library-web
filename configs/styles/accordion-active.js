const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('accordion-active-nnrTAT')
  .withLabel('Darstellung')
  .withCssClasses(
    cx.cssClass
      .withLabel('Geschlossen')
      .withCssClass('active'),
    cx.cssClass
      .withLabel('Offen')
      .withCssClass('inactive'));