const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} radioGroupPartLabel
 * @param {string} radioGroupLabelPartId
 * @param {string} helperTextPartLabel
 * @param {string} helperTextPartId
 * @param {string} errorTextPartLabel
 * @param {string} errorTextPartId
 * @returns {ContentElement}
 */

module.exports = (
    template = require("../template.twig"),
    elementId = "radio-group-6e279f5e",
    elementLabel = "Radio Gruppe",
    radioGroupPartLabel = "Label Radio Gruppe",
    radioGroupLabelPartId = "radio-group-label-84ad37f1",
    helperTextPartLabel = "Helper Text",
    helperTextPartId = "radio-group-helper-text-part-c034d086",
    errorTextPartLabel = "Fehlermeldung bei ungültiger Eingabe",
    errorTextPartId = "radio-group-error-invalid-part-67e4dde8",
  ) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.RADIOBUTTON)
  .withStyleConfigs(
    require("../../../../../configs/styles/group-alignment"),
  )
  .withParts(
    cx.part.FormRadio(radioGroupPartLabel, radioGroupLabelPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
    cx.part.PlainText(errorTextPartLabel, errorTextPartId),
  );