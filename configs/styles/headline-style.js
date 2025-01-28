const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('header-styles-d2ac4c22')
  .withLabel('Überschriften Style')
  .withCssClasses(
    cx.cssClass
      .withLabel('Display')
      .withCssClass('bsi-header-style-display'),
    cx.cssClass
      .withLabel('Überschrift 1')
      .withCssClass('bsi-header-style-1'),
    cx.cssClass
      .withLabel('Überschrift 2')
      .withCssClass('bsi-header-style-2'),
    cx.cssClass
      .withLabel('Überschrift 3')
      .withCssClass('bsi-header-style-3'),
    cx.cssClass
      .withLabel('Überschrift 4')
      .withCssClass('bsi-header-style-4'),
    cx.cssClass
      .withLabel('Überschrift 5')
      .withCssClass('bsi-header-style-5'),
    );