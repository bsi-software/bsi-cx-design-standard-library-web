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
  elementId = 'title-h5-1f7dcc4a',
  /*elementLabel = 'Heading h5',*/
  elementLabel = 'H5 Überschrift',
  titlePartId = 'title-h5-part-cbbd0541',
  /*titlePartLabel = 'Heading h5'*/
  titlePartLabel = 'H5 Überschrift'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT)
  .withStyleConfigs(
    require('../../text-color'),
    require('../../text-weight'),
    require('../../headline-style'))
  .withParts(
    cx.part.plainText
      .withId(titlePartId)
      .withLabel(titlePartLabel))
  .withArchived(true);