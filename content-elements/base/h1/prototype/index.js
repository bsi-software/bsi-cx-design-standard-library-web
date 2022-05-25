const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} titlePartId
 * @param {string} titlePartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'title-h1-piICx1',
  elementLabel = 'Heading 1',
  elementDescription = 'H1 heading',
  titlePartId = 'title-h1-part-4D1dKG',
  titlePartLabel = 'Heading 1'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.TEXT)
  .withStyleConfigs(
    require('../../../../configs/styles/text-color'),
    require('../../../../configs/styles/text-size-h1'))
  .withParts(
    cx.part.plainText
      .withId(titlePartId)
      .withLabel(titlePartLabel));