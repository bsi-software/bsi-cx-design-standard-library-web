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
  elementId = "form-poll-nps-a026d07b",
  elementLabel = "Umfrage NPS",
  formFieldPartLabel = "Formularfeld: Umfrage NPS",
  formFieldPartId = "form-poll-nps-part-0f3d03c5",
  helperTextPartLabel = "Helper Text",
  helperTextPartId = "form-poll-nps-helper-text-part-18d96c98",
  errorTextPartLabel = "Fehlermeldung bei ungültiger Eingabe",
  errorTextPartId = "form-poll-nps-part-error-invalid-8fbaf46c",
  leftLabel = "Angabe Skala (links)",
  leftLabelId = "left-label-nps-part-210cf3a6",
  rightLabel = "Angabe Skala (rechts)",
  rightLabelId = "right-label-nps-part-312d8b6e",
) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.HEART)
  .withParts(
    cx.part.FormField(formFieldPartLabel, formFieldPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
    cx.part.PlainText(errorTextPartLabel, errorTextPartId),
    cx.part.PlainText(leftLabel, leftLabelId),
    cx.part.PlainText(rightLabel, rightLabelId),
  );