require("./styles.scss");

const { TemplateElement, Icon, cx } = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
  .withElementId("bsi-button-filled-ZNfhKO")
  .withLabel("Button filled (Template Part)")
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.MEGAPHONE)
  .withRawContextFile(require("./context.json"))
  .withTemplateParts(
    // cx.templatePart.Link("Button Link", "button-link-mbjVlk"),
    // Tooltip: Gibt an, ob der Button abgerundete Ecken hat oder nicht.
    cx.templatePart.Checkbox("Abgerundete Ecken?", "button-rounded-corners-iJhxwU"),
    // Tooltip: Bestimmt, die Breite des Buttons.
    cx.templatePart.Checkbox("Soll der Button die ganze Breite einnehmen?", "button-width-rBpJI2"),
    // Tooltip: Gibt die Hintergundfarbe des Buttons an.
    cx.templatePart.Option("Hintergrundfarbe des Buttons", "button-background-color-eydth1", {
      "Transparent" : "bg-color-transparent",
      "Primary" : "bg-color-primary",
      "Secondary" : "bg-color-secondary",
      "Tertiary" : "bg-color-tertiary",
      "Light": "bg-color-light",
      "Dark" : "bg-color-dark",
    }),
    // Tooltip: Legt fest, ob der button ein Icon hat und wo es positioniert ist.
    cx.templatePart.Option("Icon Positionierung", "button-icon-position-oaRUrQ", {
      "Kein Icon" : "button-icon-none",
      "Links vom Text" : "button-icon-left",
      "Rechts vom Text" : "button-icon-right",
    }),
    // Tooltip: Legt fest, welches Icon auf dem Button angezeigt wird (nur wirkungsvoll, wenn Icon Position gesetzt wurde).
    cx.templatePart.Option("Icon (wird nur angezeigt, wenn bei Icon Position nicht 'kein Icon' ausgewählt ist)", "button-icon-qj3zlU", {
      "Chevron rechts" : "bi-chevron-compact-right",
      "Chevron links" : "bi-chevron-compact-left",
      "Pfeil rechts" : "bi-arrow-right",
      "Pfeil links" : "bi-arrow-left",
    }),
  )
;
