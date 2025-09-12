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
  template = require("../template.twig"),
  elementId = "form-container-84c6581f",
  elementLabel = "Neues Formular",
  elementDescription = "Element Beschreibung",
  dropzoneId = "form-container-dropzone-cd1f258c"
) => cx
  .contentElement
  .withFile(require(template))
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(
    require("../../../../configs/styles/form-color-scheme.js"),
    require("../../../../configs/styles/form-button-alignment.js"),

  )
  .withParts(
    cx.part.form
      .withId("form-container-part-06acb819")
      .withLabel("Formular Einstellungen")
  )
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneId)
      .withAllowedElements(
        require("../../form-section")
      ),
  );
