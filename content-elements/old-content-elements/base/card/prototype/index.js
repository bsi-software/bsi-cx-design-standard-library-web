const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} dropzoneImageId
 * @param {string} dropzoneContentId
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'card-crRST4',
  /*elementLabel = 'Highlighted content',*/
  elementLabel = 'Hervorgehobener Inhalt',
  dropzoneImageId = 'card-dropzone-image-CIqKdf',
  dropzoneContentId = 'card-dropzone-content-b19htW'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT_WITH_IMAGE)
  .withStyleConfigs(
    require('../../../../../configs/styles/old-elements-styles/fixed-height'),
    require('../../../../../configs/styles/old-elements-styles/image-content-position'),
    require('../../../../../configs/styles/old-elements-styles/image-content-ratio'),
    require('../../../../../configs/styles/old-elements-styles/background-color'),
    require('../../../../../configs/styles/old-elements-styles/color-gradient'),
    require('../../../../../configs/styles/old-elements-styles/background-opacity'),
    require('../../../../../configs/styles/old-elements-styles/border'),
    require('../../../../../configs/styles/old-elements-styles/border-radius'),
    require('../../../../../configs/styles/old-elements-styles/shadow'))
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneImageId)
      .withAllowedElements(
        require('../../figure')),
    cx.dropzone
      .withDropzone(dropzoneContentId)
      .withAllowedElements(
        require('../../headlines/h1'),
        require('../../headlines/h2'),
        require('../../headlines/h3'),
        require('../../headlines/h4'),
        require('../../headlines/h5'),
        require('../../headlines/h6'),
        require('../../text'),
        require('../../button')))
  .withArchived(true);