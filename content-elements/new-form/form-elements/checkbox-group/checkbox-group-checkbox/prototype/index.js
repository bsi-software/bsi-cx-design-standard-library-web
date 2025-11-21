const { cx, Icon } = require("@bsi-cx/design-build");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} formCheckboxGroupPartLabel
 * @param {string} formCheckboxGroupPartId
 * @returns {ContentElement}
 */

module.exports = (
    template = require("../template.twig"),
    elementId = "checkbox-group-checkbox-b2745977",
    elementLabel = "Checkbox für Gruppe",
    elementDescription = "Dies ist eine Checkbox, die nur in der Checkbox Gruppe verwendet werden kann",
    formCheckboxGroupPartLabel = "Formularfeld: Checkbox für Checkbox Gruppe",
    formCheckboxGroupPartId = "checkbox-group-checkbox-part-6cee4307",
  ) => cx.contentElement
  .withFile(template)
  .withElementId(elementId)
  .withDescription(elementDescription)
  .withLabel(elementLabel)
  .withIcon(Icon.CHECKBOX)
  .withParts(
    cx.part.FormCheckbox(formCheckboxGroupPartLabel, formCheckboxGroupPartId),
  );