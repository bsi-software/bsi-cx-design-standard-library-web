const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-label-wJakrq')
  .withLabel('Label position')
  .withCssClasses(
    cx.cssClass
      .withLabel('Top')
      .withCssClass('bsi-form-label-top'),
    cx.cssClass
      .withLabel('Left')
      .withCssClass('bsi-form-label-left'),
    cx.cssClass
      .withLabel('Floating')
      .withCssClass('bsi-form-label-floating'),
    cx.cssClass
      .withLabel('Hide label')
      .withCssClass('bsi-form-label-hide'));