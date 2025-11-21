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
    template = require("./template.twig"),
    elementId = "textarea-a4af575b",
    elementLabel = "Textfeld",
    formTextareaPartLabel = "Formularfeld: Textfeld",
    formTextareaPartId = "textarea-part-18ad4cb0",
    helperTextPartLabel = "Helper Text",
    helperTextPartId = "textarea-helper-text-part-47792922",
    errorTextPartLabel = "Fehlermeldung bei ungültiger Eingabe",
    errorTextPartId = "textarea-error-invalid-part-52eb82f6",
  ) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXTAREA)
  .withParts(
    cx.part.FormTextarea(formTextareaPartLabel, formTextareaPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
    cx.part.PlainText(errorTextPartLabel, errorTextPartId),
  );