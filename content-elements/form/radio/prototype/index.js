const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementPartId
 * @param {string} elementPartLabel
 * @param {string} formTextPartId
 * @param {string} formTextPartLabel
 * @param {string} errorRequiredPartId
 * @param {string} errorRequiredPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'radio-O6XCY3',
  elementLabel = 'Radio button',
  elementPartId = 'radio-part-I0iU7X',
  elementPartLabel = 'Radio button',
  formTextPartId = 'radio-part-text-NyYl9g',
  formTextPartLabel = 'Info text',
  errorRequiredPartId = 'radio-part-error-required-KCNwQh',
  errorRequiredPartLabel = 'Required error message'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.RADIOBUTTON)
  .withStyleConfigs(
    require('../../../../configs/styles/form-radio-inline'))
  .withParts(
    cx.part.formRadio
      .withId(elementPartId)
      .withLabel(elementPartLabel),
    cx.part.plainText
      .withId(formTextPartId)
      .withLabel(formTextPartLabel),
    cx.part.plainText
      .withId(errorRequiredPartId)
      .withLabel(errorRequiredPartLabel));