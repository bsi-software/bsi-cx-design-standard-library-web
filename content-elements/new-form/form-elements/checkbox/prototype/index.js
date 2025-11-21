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
    formCheckboxPartLabel = "Formularfeld: Checkbox",
    formCheckboxPartId = "checkbox-part-7f02c9ea",
    helperTextPartLabel = "Helper Text",
    helperTextPartId = "checkbox-helper-text-part-5989e5eb",
  ) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.CHECKBOX)
  .withParts(
    cx.part.FormCheckbox(formCheckboxPartLabel, formCheckboxPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
  );