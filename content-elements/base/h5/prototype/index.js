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
  elementId = 'title-h5-W7GGAn',
  /*elementLabel = 'Heading H5',*/
  elementLabel = 'H5 Überschrift',
  titlePartId = 'title-h5-part-U3qcnw',
  /*titlePartLabel = 'Heading H5'*/
  titlePartLabel = 'H5 Überschrift'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT)
  .withStyleConfigs(
    require('../../../../configs/styles/text-color'),
    require('../../../../configs/styles/text-size-h5'))
  .withParts(
    cx.part.plainText
      .withId(titlePartId)
      .withLabel(titlePartLabel));