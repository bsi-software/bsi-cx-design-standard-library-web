const {cx, Version, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} urlPartId
 * @param {string} urlPartLabel
 * @param {string} imagePartId
 * @param {string} imagePartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'chart-qEBqKT',
  elementLabel = 'Chart',
  urlPartId = 'chart-part-url-cDW6yK',
  urlPartLabel = 'Chart',
  imagePartId = 'chart-part-image-rpPPzg',
  imagePartLabel = 'Placeholder'
) => cx
  .contentElement
  .withFile(template)
  .withMinVersion(Version.CX_22_0)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.DIAGRAM_BAR)
  .withParts(
    cx.part.urlProvider
      .withId(urlPartId)
      .withLabel(urlPartLabel),
    cx.part.image
      .withId(imagePartId)
      .withLabel(imagePartLabel));