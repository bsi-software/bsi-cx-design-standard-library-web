const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('group-required-1b4b6dd9')
  /*.withLabel('Border')*/
  .withLabel('Ist die Gruppe ein Pflichtfeld?')
  .withCssClasses(
    cx.cssClass
      /*.withLabel('Hide border')*/
      .withLabel('Ja')
      .withCssClass('bsi-group-required'),
    cx.cssClass
      /*.withLabel('Show border')*/
      .withLabel('Nein')
      .withCssClass('bsi-group-not-required'));