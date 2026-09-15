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
  elementId = "form-field-cDZzg4",
  elementLabel = "Zahlen Input",
  elementDescription = "Formular Element, das Zahleneingaben ermöglicht.",
  formFieldPartLabel = "Formularfeld: Zahl",
  formFieldPartId = "form-field-part-VsR5Jf",
  helperTextPartLabel = "Helper Text",
  helperTextPartId = "form-field-part-number-fKDMSz",
) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.TEXT)
  .withParts(
    cx.part.FormField(formFieldPartLabel, formFieldPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
  )
  .withStyleConfigs(
    require("../../../../../../configs/styles/new-form-number-step.js")
  )
  ;