const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('background-color-KJRfob')
  .withLabel('Background color')
  .withCssClasses(
    cx.cssClass
      .withLabel('Transparent')
      .withCssClass('bsi-bg-color-transparent'),
    cx.cssClass
      .withLabel('Primary color')
      .withCssClass('bsi-bg-color-primary'),
    cx.cssClass
      .withLabel('Secondary color')
      .withCssClass('bsi-bg-color-secondary'),
    cx.cssClass
      .withLabel('Tertiary color')
      .withCssClass('bsi-bg-color-tertiary'),
    cx.cssClass
      .withLabel('Primary pastel color')
      .withCssClass('bsi-bg-color-primary-pastel'),
    cx.cssClass
      .withLabel('Secondary pastel color')
      .withCssClass('bsi-bg-color-secondary-pastel'),
    cx.cssClass
      .withLabel('Tertiary pastel color')
      .withCssClass('bsi-bg-color-tertiary-pastel'),
    cx.cssClass
      .withLabel('Light brown')
      .withCssClass('bsi-bg-color-brown-light'),
    cx.cssClass
      .withLabel('Medium brown')
      .withCssClass('bsi-bg-color-brown-medium'),
    cx.cssClass
      .withLabel('Dark brown')
      .withCssClass('bsi-bg-color-brown-dark'),
    cx.cssClass
      .withLabel('Dark')
      .withCssClass('bsi-bg-color-dark'));