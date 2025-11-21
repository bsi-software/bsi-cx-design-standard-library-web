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
  elementId = "form-container-84c6581f",
  elementLabel = "Neues Formular",
  dropzoneId = "form-container-dropzone-cd1f258c"
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(
    require("../../../../configs/styles/form-button-alignment.js"),
  )
  .withParts(
    cx.part.Form("Formular Einstellungen", "form-container-part-06acb819"),
    cx.part.PlainText("Fehlertext bei nicht ausgefüllten Pflichtfeldern.", "form-element-value-missing-error-part-d090104c"),
    cx.part.PlainText("Fehlertext bei falschem Typ.", "form-element-type-missmatch-error-part-8cbc022e"),
    cx.part.PlainText("Fehlertext bei anderen Fehlern.", "form-element-other-error-part-01ae5355"),
  )
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneId)
      .withAllowedElements(
        require("../../form-section")
      ),
  );
