const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-info-nJ0575')
  .withLabel('Info Text')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Small')*/
      .withLabel('Unter Feld')
      .withCssClass('bsi-form-info-as-text'),
    cx.cssClass
      /*.withLabel('Medium')*/
      .withLabel('Als Tooltip')
      .withCssClass('bsi-form-info-as-tooltip'));