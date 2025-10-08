const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('grid-col-width-mobile-39aa0662')
  .withLabel('Spaltenbreiten Mobile')
  .withCssClasses(
    cx.cssClass
      .withLabel('1/4')
      .withCssClass('g-col-1'),
    cx.cssClass
      .withLabel('2/4')
      .withCssClass('g-col-2'),
    cx.cssClass
      .withLabel('3/4')
      .withCssClass('g-col-3'),
    cx.cssClass
      .withLabel('4/4')
      .withCssClass('g-col-4'),
    );