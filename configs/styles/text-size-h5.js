const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('text-size-h5-92eeC4')
  .withLabel('Text size')
  .withCssClasses(
    cx.cssClass
      .withLabel('Regular')
      .withCssClass('bsi-default'),
    cx.cssClass
      .withLabel('Large')
      .withCssClass('display-5'));