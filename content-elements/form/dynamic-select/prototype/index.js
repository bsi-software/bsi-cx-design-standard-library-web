const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementPartId
 * @param {string} elementPartLabel
 * @param {string} formTextPartId
 * @param {string} formTextPartLabel
 * @param {string} placeholderTextPartId
 * @param {string} placeholderTextPartLabel
 * @param {string} errorRequiredPartId
 * @param {string} errorRequiredPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'dynamic-value-list-4pkjw8',
  elementLabel = 'Dynamisches Dropdown mit Werteliste',
  elementPartId = 'dynamic-select-part-oxkUYt',
  elementPartLabel = 'Dynamic Dropdown',
  formTextPartId = 'dynamic-select-part-text-fBFsTH',
  /*formTextPartLabel = 'Info text',*/
  formTextPartLabel = 'Info Text',
  placeholderTextPartId = 'dynamic-select-part-placeholder-D2OcHs',
  placeholderTextPartLabel = 'Platzhalter Text',
  errorRequiredPartId = 'dynamic-select-part-error-required-vN32yi',
  /*errorRequiredPartLabel = 'Required error message'*/
  errorRequiredPartLabel = 'Fehlermeldung bei leerem Pflichtfeld'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.DROPDOWN)
  .withStyleConfigs(
      require('../../../../configs/styles/form-select-placeholder')
  )
  .withParts(
      cx.part.basicDynamicValueList
          .withId(elementPartId)
          .withLabel(elementPartLabel),
      cx.part.plainText
          .withId(formTextPartId)
          .withLabel(formTextPartLabel),
      cx.part.plainText
          .withId(placeholderTextPartId)
          .withLabel(placeholderTextPartLabel),
      cx.part.plainText
          .withId(errorRequiredPartId)
          .withLabel(errorRequiredPartLabel)
  );
