const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} imagePartId
 * @param {string} imagePartLabel
 * @param {string} textPartId
 * @param {string} textPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'figure-DWEfdD',
  /*elementLabel = 'Image',*/
  elementLabel = 'Bild',
  imagePartId = 'figure-part-image-JoCwpV',
  /*imagePartLabel = 'Image',*/
  imagePartLabel = 'Bild',
  textPartId = 'figure-part-text-Xbhmjk',
  /*textPartLabel = 'Caption'*/
  textPartLabel = 'Bildunterschrift'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.IMAGE)
  .withStyleConfigs(
    require('./figure-caption'),
    require('./figure-caption-size'),
    require('./figure-orientation'),
    require('./figure-aspect-ratio'),
    require('./figure-shape'),
    require('../../../../../configs/styles/old-elements-styles/overlay-color'),
    require('../../../../../configs/styles/old-elements-styles/overlay-opacity'),
    require('./hover-effect'))
  .withParts(
    cx.part.image
      .withId(imagePartId)
      .withLabel(imagePartLabel),
    cx.part.plainText
      .withId(textPartId)
      .withLabel(textPartLabel))
  .withArchived(true);