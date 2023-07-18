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
  /*elementLabel = 'Signature field',*/
  elementLabel = 'Unterschriftenfeld',
  formTextPartId = 'text-area-part-text-JYdz9N',
  /*formTextPartLabel = 'Info text',*/
  formTextPartLabel = 'Info Text',
  errorRequiredPartId = 'text-area-part-error-required-kKKMfm',
  /*errorRequiredPartLabel = 'Required error message'*/
  errorRequiredPartLabel = 'Fehlermeldung bei leerem Pflichtfeld'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.HANDSHAKE);