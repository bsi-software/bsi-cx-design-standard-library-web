const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('overlay-color-0qiI5L')
  .withLabel('Color of overlay')
  .withCssClasses(
    cx.cssClass
      .withLabel('Hide overlay')
      .withCssClass('bsi-overlay-hide'),
    cx.cssClass
      .withLabel('Primary color')
      .withCssClass('bsi-overlay-primary-color'),
    cx.cssClass
      .withLabel('Secondary color')
      .withCssClass('bsi-overlay-secondary-color'),
    cx.cssClass
      .withLabel('Dark')
      .withCssClass('bsi-overlay-dark'),
    cx.cssClass
      .withLabel('Light')
      .withCssClass('bsi-overlay-light'));