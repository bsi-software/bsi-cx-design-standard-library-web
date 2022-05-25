const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('form-poll-6WCmqu')
  .withLabel('Type of poll')
  .withCssClasses(
    cx.cssClass
      .withLabel('NPS survey')
      .withCssClass('bsi-poll-nps'),
    cx.cssClass
      .withLabel('Star rating')
      .withCssClass('bsi-poll-star'));