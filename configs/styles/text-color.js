const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('text-color-NAaszh')
  .withLabel('Color')
  .withCssClasses(
    cx.cssClass
      .withLabel('Primary color')
      .withCssClass('bsi-text-primary-color'),
    cx.cssClass
      .withLabel('Secondary color')
      .withCssClass('bsi-text-secondary-color'),
    cx.cssClass
      .withLabel('Dark')
      .withCssClass('bsi-text-dark'),
    cx.cssClass
      .withLabel('Light')
      .withCssClass('bsi-text-light'));