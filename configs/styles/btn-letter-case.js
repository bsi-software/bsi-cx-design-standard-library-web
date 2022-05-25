const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('btn-letter-case-ItTYNe')
  .withLabel('Letter case')
  .withCssClasses(
    cx.cssClass
      .withLabel('Default')
      .withCssClass('bsi-btn-letter-default'),
    cx.cssClass
      .withLabel('All uppercase')
      .withCssClass('bsi-btn-letter-uppercase'));