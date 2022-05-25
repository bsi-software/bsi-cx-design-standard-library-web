const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('figure-shape-ma0KAF')
  .withLabel('Shape')
  .withCssClasses(
    cx.cssClass
      .withLabel('Square')
      .withCssClass('bsi-shape-square'),
    cx.cssClass
      .withLabel('Rounded')
      .withCssClass('bsi-shape-rounded'),
    cx.cssClass
      .withLabel('Circle')
      .withCssClass('bsi-shape-circle'),
    cx.cssClass
      .withLabel('Aura 1')
      .withCssClass('bsi-shape-aura-1'),
    cx.cssClass
      .withLabel('Aura 2')
      .withCssClass('bsi-shape-aura-2'),
    cx.cssClass
      .withLabel('Aura 3')
      .withCssClass('bsi-shape-aura-3'));