const { cx, Icon } = require("@bsi-cx/design-build");

const { newFormFields } = require("../../form-elements/form-fields/index.js");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} dropzoneId
 * @returns {ContentElement}
 */
module.exports = (
  template = require("./template.twig"),
  elementId = "form-section-4cc6cfe4",
  elementLabel = "Formuar Sektion",
  dropzoneId = "form-section-dropzone-a1788622"
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.ONE_COLUMN)
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneId)
      .withAllowedElements(
        require("../../../base/h3"),
        ...newFormFields,
        require('../../form-elements/checkbox'),
        require('../../form-elements/checkbox-group'),
        require('../../form-elements/radio-group'),
        require('../../form-elements/toggle-switch')
      ),
  );