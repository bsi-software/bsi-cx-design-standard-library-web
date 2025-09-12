require("./styles.scss");
const { cx, Icon } = require("@bsi-cx/design-build");

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element
  .withFile(require("./template.twig"))
  .withElementId("form-field-2217aee4")
  /*.withLabel('Form')*/
  .withLabel("Text Input")
  .withIcon(Icon.TEXT)
  .withParts(
    cx.part.FormField("Formularfeld: Text", "form-field-part-740b4e74"),
    cx.part.PlainText("Helper Text", "form-field-part-text-fb1cdc8d"),
    cx.part.PlainText("Fehlermeldung bei leerem Pflichtfeld", "form-field-part-error-required-94125730"),
    cx.part.PlainText("Fehlermeldung bei ungültiger Eingabe", "form-field-part-error-invalid-21769f4a"),
  )
