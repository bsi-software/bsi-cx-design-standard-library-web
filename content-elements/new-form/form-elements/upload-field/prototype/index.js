const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} formFieldPartLabel
 * @param {string} formFieldPartId
 * @param {string} helperTextPartLabel
 * @param {string} helperTextPartId
 * @param {string} errorTextPartLabel
 * @param {string} errorTextPartId
 * @returns {ContentElement}
 */
module.exports = (
  template = require("../template.twig"),
  elementId = "form-field-5674018a",
  elementLabel = "Datei Upload",
  formFieldPartLabel = "Formularfeld: Datei Upload",
  formFieldPartId = "form-field-part-c21742af",
  helperTextPartLabel = "Helper Text",
  helperTextPartId = "form-field-helper-text-part-0a34ce3d",
  errorTextPartLabel = "Fehlermeldung bei ungültiger Eingabe",
  errorTextPartId = "form-field-part-error-invalid-6ca6d1fd",
) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.PAPERCLIP)
  .withParts(
    cx.part.FormField(formFieldPartLabel, formFieldPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
    cx.part.PlainText(errorTextPartLabel, errorTextPartId),
  );