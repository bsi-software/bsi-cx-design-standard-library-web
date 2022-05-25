const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('hover-effect-dqTt7x')
  .withLabel('Hover effect')
  .withCssClasses(
    cx.cssClass
      .withLabel('Disabled')
      .withCssClass('bsi-hover-effect-disabled'),
    cx.cssClass
      .withLabel('Zoom in')
      .withCssClass('bsi-hover-effect-zoom-in'));