const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-checkbox-margin-TYlke6')
  .withLabel('Spacing')
  .withCssClasses(
    cx.cssClass
      .withLabel('Show spacing after checkbox')
      .withCssClass('bsi-checkbox-spacing-visible'),
    cx.cssClass
      .withLabel('Hide spacing after checkbox')
      .withCssClass('bsi-checkbox-spacing-hide'));