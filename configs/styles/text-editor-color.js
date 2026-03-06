const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('text-color-GhT63K')
  /*.withLabel('Color')*/
  .withLabel('Basis Textfarbe')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Primary color')*/
      .withLabel('Primärfarbe')
      .withCssClass('bsi-text-primary-color'),
    cx.cssClass
      /*.withLabel('Secondary color')*/
      .withLabel('Sekundärfarbe')
      .withCssClass('bsi-text-secondary-color'),
    cx.cssClass
      /*.withLabel('Dark')*/
      .withLabel('Dunkel')
      .withCssClass('bsi-text-dark'),
    cx.cssClass
      /*.withLabel('Light')*/
      .withLabel('Hell')
      .withCssClass('bsi-text-light'));