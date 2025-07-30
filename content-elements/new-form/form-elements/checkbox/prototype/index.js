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
    elementId = "checkbox-49f468e6",
    elementLabel = "Checkbox",
    elementDescription = "Element Beschreibung",
    formCheckboxPartLabel = "Formularfeld: Checkbox",
    formCheckboxPartId = "checkbox-part-7f02c9ea",
    helperTextPartLabel = "Helper Text",
    helperTextPartId = "checkbox-helper-text-part-5989e5eb",
    errorTextPartLabel = "Fehlermeldung bei ungültiger Eingabe",
    errorTextPartId = "checkbox-error-invalid-part-21861f61",
  ) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withDescription(elementDescription)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT)
  .withParts(
    cx.part.FormCheckbox(formCheckboxPartLabel, formCheckboxPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
    cx.part.PlainText(errorTextPartLabel, errorTextPartId),
  );