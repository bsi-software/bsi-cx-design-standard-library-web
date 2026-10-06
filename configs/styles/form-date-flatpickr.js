const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-date-flatpickr-b2bc82aa')
  .withLabel('flatpickr anzeigen')
  .withCssClasses(
    cx.cssClass
      .withLabel('Ja')
      .withCssClass('flatpickr'),
    cx.cssClass
      .withLabel('Nein')
      .withCssClass('no-flatpickr'));