const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} sideKeyPartId
 * @param {string} sideKeyPartLabel
 * @param {string} friendlyCaptchaPartId
 * @param {string} friendlyCaptchaLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('./template.twig'),
  elementId = 'friendly-captcha-03c21de7',
  elementLabel = 'Friendly Captcha',
  elementDescription = 'Eine Friendly Captcha Lizenz wird benötigt',
  sideKeyPartId = 'friendly-captcha-part-968cbea9',
  sideKeyPartLabel = 'SiteKey',
  friendlyCaptchaPartId = 'friendly-captcha-form-field-part-bolY1C',
  friendlyCaptchaLabel = 'Die ID darf nicht angepasst werden, da ansonsten die Funktionalität des freindly Captchas verloren geht.',
  validityMessageId = "friendly-captcha-validity-message-Uc90KX",
  validityMessageLabel = "Validierungsnachricht"

) => cx
.contentElement
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withFile(template)
  .withIcon(Icon.FORMFIELD)
  .withParts(
      cx.part.plainText
        .withId(sideKeyPartId)
        .withLabel(sideKeyPartLabel),
      cx.part.formField
        .withId(friendlyCaptchaPartId)
        .withLabel(friendlyCaptchaLabel),
      cx.part.plainText
        .withId(validityMessageId)
        .withLabel(validityMessageLabel)
  );