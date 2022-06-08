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
  elementId = 'title-h4-CNboRc',
  /*elementLabel = 'Heading H4',*/
  elementLabel = 'H4 Überschrift',
  titlePartId = 'title-h4-part-2TWXBi',
  /*titlePartLabel = 'Heading H4'*/
  titlePartLabel = 'H4 Überschrift'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT)
  .withStyleConfigs(
    require('../../../../configs/styles/text-color'),
    require('../../../../configs/styles/text-size-h4'))
  .withParts(
    cx.part.plainText
      .withId(titlePartId)
      .withLabel(titlePartLabel));