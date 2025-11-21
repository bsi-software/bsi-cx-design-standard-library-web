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
  elementId = "form-field-2217aee4",
  elementLabel = "Text Input",
  formFieldPartLabel = "Formularfeld: Text",
  formFieldPartId = "form-field-part-740b4e74",
  helperTextPartLabel = "Helper Text",
  helperTextPartId = "form-field-part-text-fb1cdc8d",
) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT)
  .withParts(
    cx.part.FormField(formFieldPartLabel, formFieldPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
  );