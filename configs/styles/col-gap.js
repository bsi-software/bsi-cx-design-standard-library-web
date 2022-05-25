const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('col-gap-5SzAwS')
  .withLabel('Gap between columns')
  .withCssClasses(
    cx.cssClass
      .withLabel('Show gaps')
      .withCssClass('bsi-gaps-visible'),
    cx.cssClass
      .withLabel('Hide gaps')
      .withCssClass('bsi-gaps-hide'));