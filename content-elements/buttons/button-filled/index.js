const { TemplateElement, Icon, cx, bsiProperty, bsiLoremIpsum } = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
  .withElementId("bsi-button-filled-ZNfhKO")
  .withLabel(bsiProperty("buttons.label", "button"))
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.MEGAPHONE)
  .withTemplateParts(
    cx.templatePart.Link("Button Link", "button-link-mbjVlk").withLinkPrefill("#", bsiProperty("button.text", bsiLoremIpsum(2)), bsiProperty("button.bfsgLabel", "Dies ist ein Button, der einen Link beinhaltet"), false),
    // Tooltip: Gibt an, ob der Button abgerundete Ecken hat oder nicht.
    cx.templatePart.Checkbox(bsiProperty("buttons.roundedCorners", "Abgerundete Ecken?"), "button-rounded-corners-iJhxwU").withCheckboxPrefill(true),
    // Tooltip: Bestimmt, die Breite des Buttons.
    cx.templatePart.Checkbox(bsiProperty("buttons.fullWidth", "Soll der Button die ganze Breite einnehmen?"), "button-width-rBpJI2").withCheckboxPrefill(false),
    // Tooltip: Gibt die Hintergundfarbe des Buttons an.
    cx.templatePart.Option(bsiProperty("buttons.backgroundColorLabel", "Hintergrundfarbe des Buttons"), "button-background-color-eydth1", {
      // TODO: Wie machen wir die Übersetzug von den Optionen?
      "Transparent" : "bg-color-transparent",
      "Primary" : "bg-color-primary",
      "Secondary" : "bg-color-secondary",
      "Tertiary" : "bg-color-tertiary",
      "Light": "bg-color-light",
      "Dark" : "bg-color-dark",
    }).withOptionPrefill("bg-color-transparent"),
    // Tooltip: Legt fest, welches Icon auf dem Button angezeigt wird (nur wirkungsvoll, wenn Icon Position gesetzt wurde).
    cx.templatePart.Option(bsiProperty("buttons.iconLabel", "Icon (wird nur angezeigt, wenn bei Icon Position nicht 'kein Icon' ausgewählt ist)"), "button-icon-qj3zlU", {
      "Kein Icon" : "button-icon-none",
      "Chevron rechts" : "bi-chevron-compact-right",
      "Chevron links" : "bi-chevron-compact-left",
      "Pfeil rechts" : "bi-arrow-right",
      "Pfeil links" : "bi-arrow-left",
    }).withOptionPrefill("button-icon-none"),
  )
;