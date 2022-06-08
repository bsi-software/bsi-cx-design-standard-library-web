const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('btn-layout-YSdX2N')
  /*.withLabel('Button layout')*/
  .withLabel('Button Layout')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Filled')*/
      .withLabel('Farbig ausgefüllt')
      .withCssClass('bsi-btn-filled'),
    cx.cssClass
      /*.withLabel('Outline')*/
      .withLabel('Farbig umrandet')
      .withCssClass('bsi-btn-outline'));