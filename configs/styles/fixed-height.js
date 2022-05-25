const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('fixed-height-d1Z2tp')
  .withLabel('Height of element')
  .withCssClasses(
    cx.cssClass
      .withLabel('Auto height')
      .withCssClass('bsi-height-auto'),
    cx.cssClass
      .withLabel('Fixed height (150 px)')
      .withCssClass('bsi-height-fixed-150px'),
    cx.cssClass
      .withLabel('Fixed height (200 px)')
      .withCssClass('bsi-height-fixed-200px'),
    cx.cssClass
      .withLabel('Fixed height (250 px)')
      .withCssClass('bsi-height-fixed-250px'),
    cx.cssClass
      .withLabel('Fixed height (300 px)')
      .withCssClass('bsi-height-fixed-300px'),
    cx.cssClass
      .withLabel('Fixed height (350 px)')
      .withCssClass('bsi-height-fixed-350px'),
    cx.cssClass
      .withLabel('Fixed height (400 px)')
      .withCssClass('bsi-height-fixed-400px'),
    cx.cssClass
      .withLabel('Fixed height (450 px)')
      .withCssClass('bsi-height-fixed-450px'),
    cx.cssClass
      .withLabel('Fixed height (500 px)')
      .withCssClass('bsi-height-fixed-500px'));