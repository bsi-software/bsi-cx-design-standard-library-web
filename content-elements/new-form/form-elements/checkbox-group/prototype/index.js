const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} checkboxGroupPartLabel
 * @param {string} checkboxGroupLabelTextPartId
 * @param {string} formCheckboxGroupPartLabel
 * @param {string} formCheckboxGroupPartId
 * @param {string} helperTextPartLabel
 * @param {string} helperTextPartId
 * @param {string} errorTextPartLabel
 * @param {string} errorTextPartId
 * @returns {ContentElement}
 */

module.exports = (
    template = require("../template.twig"),
    elementId = "checkbox-group-95a8d908",
    elementLabel = "Checkbox Gruppe",
    elementDescription = "Element Beschreibung",
    checkboxGroupPartLabel = "Label Chackbox Gruppe",
    checkboxGroupLabelTextPartId = "checkbox-group-label-a7bf5a38",
    helperTextPartLabel = "Helper Text",
    helperTextPartId = "checkbox-group-helper-text-part-1cf1d475",
    errorTextPartLabel = "Fehlermeldung bei ungültiger Eingabe",
    errorTextPartId = "checkbox-group-error-invalid-part-6209efa8",
    dropzoneId = "checkbox-group-dropzone-id-4f4a7409",
  ) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withDescription(elementDescription)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT)
  .withStyleConfigs(
    require("../../../../../configs/styles/group-required"),
    require("../../../../../configs/styles/group-alignment"),
  )
  .withParts(
    cx.part.PlainText(checkboxGroupPartLabel, checkboxGroupLabelTextPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
    cx.part.PlainText(errorTextPartLabel, errorTextPartId),
  )
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneId)
      .withAllowedElements(
        require("../checkbox-group-checkbox"),
      )
  )
  ;