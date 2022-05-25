const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} elementPartId
 * @param {string} elementPartLabel
 * @param {string} countriesPartId
 * @param {string} countriesPartLabel
 * @param {string} pinnedCountriesPartId
 * @param {string} pinnedCountriesPartLabel
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
  elementId = 'form-field-tel-fKUxNS',
  elementLabel = 'Phone number',
  elementDescription = 'Normalized international phone number',
  elementPartId = 'form-field-tel-part-L3Y3gC',
  elementPartLabel = 'Phone number',
  countriesPartId = 'form-field-tel-part-countries-OGz4jf',
  countriesPartLabel = 'Available countries',
  pinnedCountriesPartId = 'form-field-tel-part-pinned-BEWZhN',
  pinnedCountriesPartLabel = 'Pinned countries',
  formTextPartId = 'form-field-tel-part-text-yXZUwb',
  formTextPartLabel = 'Info text',
  errorRequiredPartId = 'form-field-tel-part-error-required-XKiYlP',
  errorRequiredPartLabel = 'Required error message',
  errorInvalidPartId = 'form-field-tel-part-error-invalid-3XeP4R',
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
      .withId(countriesPartId)
      .withLabel(countriesPartLabel),
    cx.part.plainText
      .withId(pinnedCountriesPartId)
      .withLabel(pinnedCountriesPartLabel),
    cx.part.plainText
      .withId(formTextPartId)
      .withLabel(formTextPartLabel),
    cx.part.plainText
      .withId(errorRequiredPartId)
      .withLabel(errorRequiredPartLabel),
    cx.part.plainText
      .withId(errorInvalidPartId)
      .withLabel(errorInvalidPartLabel));