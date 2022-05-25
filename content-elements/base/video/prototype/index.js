const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} elementPartId
 * @param {string} elementPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'video-C4cbKm',
  elementLabel = 'Video',
  elementDescription = 'YouTube video',
  elementPartId = 'video-part-loPxhG',
  elementPartLabel = 'YouTube video'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.VIDEO)
  .withParts(
    cx.part.video
      .withId(elementPartId)
      .withLabel(elementPartLabel));