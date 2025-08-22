/**
 * !IMPORTANT!
 * to use this element the property "regexPattern" has to be set
 */

const { cx, Icon, Version } = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} inputPartId
 * @param {string} inputPartLabel
 * @param {string} infoTextPartId
 * @param {string} infoTextPartLabel
 * @param {string} errorRequiredPartId
 * @param {string} errorRequiredPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'regex-input-J37djj',
  /*elementLabel = 'Regex input',*/
  elementLabel = 'Regex - Formularfeld',
  /*elementDescription = 'Text-input with Regex-Validation',*/
  elementDescription = 'Textfeld mit Regex-Validierung',
  inputPartId = 'regex-input-field-zSVF1f',
  /*elementPartLabel = 'Phone number',*/
  inputPartLabel = 'Formularfeld',
  infoTextPartId = 'regex-input-info-15YMmu',
  /*formTextPartLabel = 'Info text',*/
  infoTextPartLabel = 'Info Text',
  errorRequiredPartId = 'regex-input-error-required-27e49U',
  /*errorRequiredPartLabel = 'Error message with correction hint',*/
  errorRequiredPartLabel = 'Fehlermeldung mit Korrekturvorschlag',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.FORMFIELD)
  .withMinVersion(Version.CX_23_1)
  .withStyleConfigs(require('../../../../configs/styles/form-field-pattern'))
  .withParts(
    cx.part.formField
      .withId(inputPartId)
      .withLabel(inputPartLabel),
    cx.part.plainText
      .withId(infoTextPartId)
      .withLabel(infoTextPartLabel),
    cx.part.plainText
      .withId(errorRequiredPartId)
      .withLabel(errorRequiredPartLabel));