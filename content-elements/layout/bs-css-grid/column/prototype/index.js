const { cx, Icon } = require("@bsi-cx/design-build");

const {advancedElements} = require('../../../../advanced');
const {contentElements} = require('../../../../base');

const element = cx.contentElement;

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} dropzoneId
 * @param {string} elementLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementID = 'bsi-grid-column-d587a56d',
  dropzoneId = 'bsi-grid-column-dropzone-0c2739f1',
  elementLabel = 'Spalte (Grid)',
) => cx.contentElement
  .withElementId(elementID)
  .withLabel(elementLabel)
  .withFile(template)
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(
    require("../../../../../configs/styles/grid-column-width-desktop"),
    require("../../../../../configs/styles/grid-column-width-tablet"),
    require("../../../../../configs/styles/grid-column-width-mobile"),
    require("../../../../../configs/styles/grid-column-content-orientation"),
    require("../../../../../configs/styles/background-color"),
    require("../../../../../configs/styles/background-opacity")
  )
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneId)
      .withAllowedElements(
        element,
        require('../../../spacer'),
        require('../../../../base/banner'),
        ...contentElements,
        ...advancedElements)
  );
