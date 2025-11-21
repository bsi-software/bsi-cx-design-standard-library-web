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
    elementDescription = "Formular Element, das eine Auswahl aus mehreren Optionen erlaubt.",
    radioGroupPartLabel = "Label Radio Gruppe",
    radioGroupLabelPartId = "radio-group-label-84ad37f1",
    helperTextPartLabel = "Helper Text",
    helperTextPartId = "radio-group-helper-text-part-c034d086",
  ) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.RADIOBUTTON)
  .withStyleConfigs(
    require("../../../../../configs/styles/group-alignment"),
  )
  .withParts(
    cx.part.FormRadio(radioGroupPartLabel, radioGroupLabelPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
  );