const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} formTextPartId
 * @param {string} formTextPartLabel
 * @param {string} errorRequiredPartId
 * @param {string} errorRequiredPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'signature-field-fKwfSc',
  elementLabel = 'Unterschriftenfeld',
  formTextPartId = 'text-area-part-text-JYdz9N',
  formTextPartLabel = 'Info Text',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.HANDSHAKE)
  .withParts(
    cx.part.plainText
      .withId(formTextPartId)
      .withLabel(formTextPartLabel));