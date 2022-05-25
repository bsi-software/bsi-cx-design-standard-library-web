const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-columns-sVbGg2')
  .withLabel('Number of columns per row')
  .withCssClasses(
    cx.cssClass
      .withLabel('Automatic')
      .withCssClass('bsi-col-auto'),
    cx.cssClass
      .withLabel('2 columns')
      .withCssClass('bsi-col-two'),
    cx.cssClass
      .withLabel('3 columns')
      .withCssClass('bsi-col-three'),
    cx.cssClass
      .withLabel('4 columns')
      .withCssClass('bsi-col-four'));