const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('border-radius-xTOXFS')
  .withLabel('Border radius')
  .withCssClasses(
    cx.cssClass
      .withLabel('Sharp corners')
      .withCssClass('bsi-corner-sharp'),
    cx.cssClass
      .withLabel('Rounded corners')
      .withCssClass('bsi-corner-rounded'));