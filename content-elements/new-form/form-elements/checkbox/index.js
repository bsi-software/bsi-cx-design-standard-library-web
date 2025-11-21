require("./styles.scss");
const { cx, Icon } = require("@bsi-cx/design-build");

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element
  .withFile(require("./template.twig"))
  .withElementId("checkbox-49f468e6")
  /*.withLabel('Form')*/
  .withLabel("Checkboxt")
  .withIcon(Icon.CHECKBOX)
  .withParts(
    cx.part.FormField("Checkbox", "checkbox-part-7f02c9ea"),
    cx.part.PlainText("Helper Text", "checkbox-part-text-5989e5eb"),
    cx.part.PlainText("Fehlermeldung bei leerem Pflichtfeld", "checkbox-part-error-required-2e4bcd61"),
    cx.part.PlainText("Hinweis bei erfolgreicher Eingabe", "checkbox-part-success-e49b6adf"),
    cx.part.PlainText("Fehlermeldung bei ungültiger Eingabe", "checkbox-part-error-invalid-21861f61"),
  )
