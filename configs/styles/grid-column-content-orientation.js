const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('grid-col-content-orientation-39aa0662')
  .withLabel('Inhaltsausrichtung')
  .withCssClasses(
    cx.cssClass
      .withLabel('start')
      .withCssClass('align-content-start'),
    cx.cssClass
      .withLabel('center')
      .withCssClass('align-content-center'),
    cx.cssClass
      .withLabel('end')
      .withCssClass('align-content-end')
    );