const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} checkboxGroupPartLabel
 * @param {string} checkboxGroupLabelTextPartId
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
    elementDescription = "Formular Element, das Checkboxen gruppiert.",
    checkboxGroupPartLabel = "Label Chackbox Gruppe",
    checkboxGroupLabelTextPartId = "checkbox-group-label-a7bf5a38",
    helperTextPartLabel = "Helper Text",
    helperTextPartId = "checkbox-group-helper-text-part-1cf1d475",
    dropzoneId = "checkbox-group-dropzone-id-4f4a7409",
  ) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.CHECKBOX)
  .withStyleConfigs(
    require("../../../../../configs/styles/group-required"),
    require("../../../../../configs/styles/group-alignment"),
  )
  .withParts(
    cx.part.PlainText(checkboxGroupPartLabel, checkboxGroupLabelTextPartId),
    cx.part.PlainText(helperTextPartLabel, helperTextPartId),
  )
  .withDropzones(
    cx.dropzone
      .withDropzone(dropzoneId)
      .withAllowedElements(
        require("../checkbox-group-checkbox"),
      )
  )
  ;