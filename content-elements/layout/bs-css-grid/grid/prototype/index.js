const { cx, Icon } = require("@bsi-cx/design-build");


/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} dropzoneId
 * @param {string} elementLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'bsi-grid-24cb3f1c',
  dropzoneId = 'bsi-grid-dropzone-f88c74f5',
  elementLabel = 'Grid',
) => cx.contentElement
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withFile(template)
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(
    require("../../../../../configs/styles/grid-width"),
    require("../../../../../configs/styles/background-color"),
    require("../../../../../configs/styles/background-opacity")
  )
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneId)
      .withAllowedElements(require('../../column'))
  );
