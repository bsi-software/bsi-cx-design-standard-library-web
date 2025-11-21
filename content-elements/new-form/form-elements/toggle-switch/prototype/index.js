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
    elementId = "toggle-switch-b0ae602a",
    elementLabel = "Toggle Switch",
    elementDescription = "Formular Element, das zwischen zwei Zuständen wechselt",
    formToggleSwitchPartLabel = "Formularfeld: Toggle Switch",
    formToggleSwitchPartId = "toggle-switch-part-76e700be",
    helperTextPartLabel = "Helper Text",
    helperTextPartId = "toggle-switch-helper-text-part-772277fc",
    // errorTextPartLabel = "Fehlermeldung bei ungültiger Eingabe",
    // errorTextPartId = "toggle-switch-error-invalid-part-a8889dc9",
  ) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.CHECKBOX)
  .withParts(
    cx.part.FormCheckbox(formToggleSwitchPartLabel, formToggleSwitchPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
    // cx.part.PlainText(errorTextPartLabel, errorTextPartId),
  );