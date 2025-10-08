const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = (
  template = require('../template.twig'),
  elementId = 'bsi-grid-24cb3f1c',
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
      .withDropzone('bsi-grid-dropzone-f88c74f5')
      .withAllowedElements(require('../../column'))
  );
