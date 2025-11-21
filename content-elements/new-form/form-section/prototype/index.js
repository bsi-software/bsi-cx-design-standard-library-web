const { cx, Icon } = require("@bsi-cx/design-build");

const { newFormElements } = require("../../form-elements");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} dropzoneIdLeft
 * @param {string} dropzoneIdRight
 * @returns {ContentElement}
 */
module.exports = (
  template = require("./template.twig"),
  elementId = "form-section-4cc6cfe4",
  elementLabel = "Formuar Sektion",
  elementDescription = "Abschnitt, der mehrere Formular-Elemente strukturiert.",
  dropzoneIdLeft = "form-section-dropzone-a1788622",
  dropzoneIdRight = "form-section-right-dropzone-e4dd6542"
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(
    require("../../../../configs/styles/new-form-section-column-amount.js"),
  )
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneIdLeft)
      .withAllowedElements(
        require("../../../base/h3"),
        ...newFormElements,
      ),
    cx.dropzone
      .withDropzone(dropzoneIdRight)
      .withAllowedElements(
        require("../../../base/h3"),
        ...newFormElements,
      ),
  );