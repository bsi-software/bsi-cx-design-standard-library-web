const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('then-group-required-4tDo82')
  .withLabel('Felder sind')
  .withCssClasses(
    cx.cssClass
      .withLabel('Pflichtfelder')
      .withCssClass('required-if-visible'),
    cx.cssClass
      .withLabel('keine Pflichtfelder')
      .withCssClass('not-required-if-visible'));
