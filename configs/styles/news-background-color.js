const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('news-background-color-K8UaCf')
  .withLabel('Background color')
  .withCssClasses(
    cx.cssClass
      .withLabel('White background, grey border')
      .withCssClass('bsi-news-bg-color-white'),
    cx.cssClass
      .withLabel('Grey background, no border')
      .withCssClass('bsi-news-bg-color-grey'));