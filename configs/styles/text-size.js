const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('text-size-zvvb3f')
  .withLabel('Text size')
  .withCssClasses(
    cx.cssClass
      .withLabel('Regular')
      .withCssClass('bsi-default'),
    cx.cssClass
      .withLabel('Small')
      .withCssClass('small'),
    cx.cssClass
      .withLabel('Lead')
      .withCssClass('lead'));