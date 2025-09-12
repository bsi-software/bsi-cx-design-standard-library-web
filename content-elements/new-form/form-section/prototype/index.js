const { cx, Icon } = require("@bsi-cx/design-build");

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
  elementDescription = "Element Beschreibung",
  dropzoneId = "form-section-dropzone-a1788622"
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.ONE_COLUMN)
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneId)
      .withAllowedElements(
        require("../../../base/h3"),
        require("../../form-elements/form-fields/text-field")
      ),
  );