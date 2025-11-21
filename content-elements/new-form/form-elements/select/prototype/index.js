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
    elementId = "select-51fb02b4",
    elementLabel = "Select",
    elementDescription = "Formular Element, um eine Option aus einem Dropdown zu wählen.",
    formSelectPartLabel = "Formularfeld: Select",
    formSelectPartId = "select-part-c1cbbcc6",
    helperTextPartLabel = "Helper Text",
    helperTextPartId = "select-helper-text-part-5989e5eb",
  ) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.DROPDOWN)
  .withParts(
    cx.part.FormSelect(formSelectPartLabel, formSelectPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
  );