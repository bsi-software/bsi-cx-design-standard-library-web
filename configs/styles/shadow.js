const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('shadow-mCj6Ti')
  .withLabel('Shadow')
  .withCssClasses(
    cx.cssClass
      .withLabel('Hide shadow')
      .withCssClass('bsi-shadow-hide'),
    cx.cssClass
      .withLabel('Show shadow')
      .withCssClass('bsi-shadow-visible'));