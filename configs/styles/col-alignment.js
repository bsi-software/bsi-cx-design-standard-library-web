const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('col-alignment-jt2uRS')
  .withLabel('Alignment')
  .withCssClasses(
    cx.cssClass
      .withLabel('Align left')
      .withCssClass('bsi-col-align-left'),
    cx.cssClass
      .withLabel('Center')
      .withCssClass('bsi-col-align-center'),
    cx.cssClass
      .withLabel('Align right')
      .withCssClass('bsi-col-align-right'));