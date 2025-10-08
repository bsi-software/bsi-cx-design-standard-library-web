const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('row-width-34f287b8')
  /*.withLabel('Layout width')*/
  .withLabel('Breite des Layouts')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Fixed width')*/
      .withLabel('Feste Breite')
      .withCssClass('container'),
    cx.cssClass
      /*.withLabel('Full width')*/
      .withLabel('Volle Breite')
      .withCssClass('container-fluid'));