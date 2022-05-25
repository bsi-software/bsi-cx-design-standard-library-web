const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('figure-orientation-CSLe1g')
  .withLabel('Orientation')
  .withCssClasses(
    cx.cssClass
      .withLabel('Landscape')
      .withCssClass('bsi-orientation-landscape'),
    cx.cssClass
      .withLabel('Portrait')
      .withCssClass('bsi-orientation-portrait'));