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
  elementId = 'logo-4c8c3a',
  elementLabel = 'Logo',
  imagePartId = 'logo-lm-part-image-727593',
  elementDescription = 'Dark- & Light-Mode',
  imageDarkModePartId = 'logo-dm-part-image-289935',
  textLmPartLabel = 'Logo Light mode',
  textDmPartLabel = 'Logo Dark mode',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withDescription(elementDescription)
  .withLabel(elementLabel)
  .withIcon(Icon.IMAGE)
  .withStyleConfigs()
  .withParts(
    cx.part.image
      .withId(imagePartId)
      .withLabel(textLmPartLabel),
    cx.part.image
      .withId(imageDarkModePartId)
      .withLabel(textDmPartLabel),
    )
  .withArchived(true);