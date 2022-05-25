const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} elementPartId
 * @param {string} elementPartLabel
 * @param {string} formTextPartId
 * @param {string} formTextPartLabel
 * @param {string} errorRequiredPartId
 * @param {string} errorRequiredPartLabel
 * @param {string} errorInvalidPartId
 * @param {string} errorInvalidPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'form-field-REEhtN',
  elementLabel = 'Form field',
  elementDescription = 'Text, e-mail, date/time, password, file, number, range',
  elementPartId = 'form-field-part-H72Mnu',
  elementPartLabel = 'Form field',
  formTextPartId = 'form-field-part-text-T9yfhp',
  formTextPartLabel = 'Info text',
  errorRequiredPartId = 'form-field-part-error-required-904DIx',
  errorRequiredPartLabel = 'Required error message',
  errorInvalidPartId = 'form-field-part-error-invalid-5g1mUc',
  errorInvalidPartLabel = 'Invalid error message',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.FORMFIELD)
  .withParts(
    cx.part.formField
      .withId(elementPartId)
      .withLabel(elementPartLabel),
    cx.part.plainText
      .withId(formTextPartId)
      .withLabel(formTextPartLabel),
    cx.part.plainText
      .withId(errorRequiredPartId)
      .withLabel(errorRequiredPartLabel),
    cx.part.plainText
      .withId(errorInvalidPartId)
      .withLabel(errorInvalidPartLabel));