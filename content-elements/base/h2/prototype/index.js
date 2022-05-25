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
  elementId = 'title-h2-KNs10G',
  elementLabel = 'Heading 2',
  elementDescription = 'H2 heading',
  titlePartId = 'title-h2-part-vD6omt',
  titlePartLabel = 'Heading 2'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.TEXT)
  .withStyleConfigs(
    require('../../../../configs/styles/text-color'),
    require('../../../../configs/styles/text-size-h2'))
  .withParts(
    cx.part.plainText
      .withId(titlePartId)
      .withLabel(titlePartLabel));