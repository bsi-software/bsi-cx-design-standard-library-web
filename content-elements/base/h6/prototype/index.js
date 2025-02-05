const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} titlePartId
 * @param {string} titlePartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'title-h6-f9a2d422',
  /*elementLabel = 'Heading H6',*/
  elementLabel = 'H6 Überschrift',
  titlePartId = 'title-h6-part-2ef79d06',
  /*titlePartLabel = 'Heading H6'*/
  titlePartLabel = 'H6 Überschrift'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT)
  .withStyleConfigs(
    require('../../../../configs/styles/text-color'),
    require('../../../../configs/styles/text-weight'),
    require('../../../../configs/styles/headline-style'))
  .withParts(
    cx.part.plainText
      .withId(titlePartId)
      .withLabel(titlePartLabel));