const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('spacer-yijTs2')
  /*.withLabel('Size of spacing')*/
  .withLabel('Grösse des Abstands')
  .withCssClasses(
    cx.cssClass
      .withLabel('4 px')
      .withCssClass('pt-1'),
    cx.cssClass
      .withLabel('8 px')
      .withCssClass('pt-2'),
    cx.cssClass
      .withLabel('16 px')
      .withCssClass('pt-3'),
    cx.cssClass
      .withLabel('24 px')
      .withCssClass('pt-4'),
    cx.cssClass
      .withLabel('48 px')
      .withCssClass('pt-5'));