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
  elementId = "form-field-bdcd8d55",
  elementLabel = "E-mail Input",
  formFieldPartLabel = "Formularfeld: Text",
  formFieldPartId = "form-field-part-71d76c77",
  helperTextPartLabel = "Helper Text",
  helperTextPartId = "form-field-part-email-033f20a1",
  errorTextPartLabel = "Fehlermeldung bei ungültiger Eingabe",
  errorTextPartId = "form-field-part-error-invalid-b8da3758",
) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.ENVELOPE)
  .withParts(
    cx.part.FormField(formFieldPartLabel, formFieldPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
    cx.part.PlainText(errorTextPartLabel, errorTextPartId),
  );