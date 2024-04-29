require('./styles.scss');

const {cx, Icon} = require('@bsi-cx/design-build');

module.exports = cx.contentElement
  .withFile(require('./template.twig'))
  .withElementId('form-pin-dafa5a0e')
  .withLabel('PIN')
  .withDescription('')
  .withIcon(Icon.FORMFIELD)
  .withStyleConfigs(
    require('../../../configs/styles/pin-label'),
    require('../../../configs/styles/pin-auto-submit'))
  .withParts(
    cx.part.formField
      .withId('form-field-part-eefc3ac5')
      .withLabel('Formularfeld'),
    cx.part.plainText
      .withId('form-field-part-text-cc1a1c62')
      .withLabel('Info Text'),
    cx.part.plainText
      .withId('form-field-part-error-required-f3cf3728')
      .withLabel('Fehlermeldung bei leerem Pflichtfeld'));