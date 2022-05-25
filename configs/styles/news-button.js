const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('news-button-2vFF8z')
  .withLabel('Read-more button')
  .withCssClasses(
    cx.cssClass
      .withLabel('Show button')
      .withCssClass('bsi-news-btn-visible'),
    cx.cssClass
      .withLabel('Hide button')
      .withCssClass('bsi-news-btn-hide'));