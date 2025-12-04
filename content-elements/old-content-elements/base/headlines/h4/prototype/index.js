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
  elementId = 'title-h4-7b609871',
  /*elementLabel = 'Heading H4',*/
  elementLabel = 'H4 Überschrift',
  titlePartId = 'title-h4-part-c5318944',
  /*titlePartLabel = 'Heading H4'*/
  titlePartLabel = 'H4 Überschrift'
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