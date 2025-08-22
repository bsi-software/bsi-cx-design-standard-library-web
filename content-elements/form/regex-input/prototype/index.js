const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} inputPartId
 * @param {string} inputPartLabel
 * @param {string} regexPartId
 * @param {string} regexPartLabel
 * @param {string} pinnedCountriesPartId
 * @param {string} pinnedCountriesPartLabel
 * @param {string} infoTextPartId
 * @param {string} infoTextPartLabel
 * @param {string} errorRequiredPartId
 * @param {string} errorRequiredPartLabel
 * @param {string} errorInvalidPartId
 * @param {string} errorInvalidPartLabel
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
  regexPartId = 'regex-plain-text-wGtYy5',
  /*regexPartLabel = 'Regex constraint',*/
  regexPartLabel = 'Regex Bedingung',
  infoTextPartId = 'regex-input-info-15YMmu',
  /*formTextPartLabel = 'Info text',*/
  infoTextPartLabel = 'Info Text',
  errorRequiredPartId = 'regex-input-error-required-27e49U',
  /*errorRequiredPartLabel = 'Required error message',*/
  errorRequiredPartLabel = 'Fehlermeldung bei leerem Pflichtfeld',
  errorInvalidPartId = 'regex-input-error-invalid-Bx7ztq',
  /*errorInvalidPartLabel = 'Invalid error message',*/
  errorInvalidPartLabel = 'Fehlermeldung bei ungültiger Eingabe',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.FORMFIELD)
  .withParts(
    cx.part.formField
      .withId(inputPartId)
      .withLabel(inputPartLabel),
    cx.part.plainText
      .withId(regexPartId)
      .withLabel(regexPartLabel),
    cx.part.plainText
      .withId(infoTextPartId)
      .withLabel(infoTextPartLabel),
    cx.part.plainText
      .withId(errorRequiredPartId)
      .withLabel(errorRequiredPartLabel),
    cx.part.plainText
      .withId(errorInvalidPartId)
      .withLabel(errorInvalidPartLabel));