require('./styles.scss');
const {cx, Icon} = require('@bsi-cx/design-build');

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element.withFile(require('./template.twig'))
  .withElementId('form-container-pin-384aa4d6')
  /*.withLabel('Form')*/
  .withLabel('Pin-Element')
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(
    require('../form-width'),
    require('../form-layout'),
    require('../form-color'),
    require('./pin-label'),
    require('./pin-auto-submit'))
  .withParts(
    cx.part.formField
      .withId('form-field-part-eefc3ac5')
      .withLabel('Formularfeld'),
    cx.part.plainText
      .withId('form-field-part-text-cc1a1c62')
      .withLabel('Info Text'),
    cx.part.plainText
      .withId('form-field-part-error-required-f3cf3728')
      .withLabel('Fehlermeldung bei leerem Pflichtfeld'))
  .withArchived(true);