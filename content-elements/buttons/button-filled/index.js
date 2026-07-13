const {
  TemplateElement,
  Icon,
  cx,
  bsiProperty,
} = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
  .withElementId("bsi-button-filled")
  .withLabel(bsiProperty("button.label.element", "button"))
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.MEGAPHONE)
  .withTemplateParts(
    cx.templatePart
      .Link(bsiProperty("button.label.link"), "button-link")
      .withLinkPrefill(
        bsiProperty("button.prefill.link.href"),
        bsiProperty("button.prefill.link.text"),
      ),
    // INFO: Gibt an, ob der Button abgerundete Ecken hat oder nicht.
    cx.templatePart
      .Checkbox(
        bsiProperty("button.label.roundCorners", "Abgerundete Ecken?"),
        "button-rounded-corners-iJhxwU",
      )
      .withCheckboxPrefill(true),
    // INFO: Bestimmt, die Breite des Buttons.
    cx.templatePart
      .Checkbox(
        bsiProperty(
          "button.label.fullWidth",
          "Soll der Button die ganze Breite einnehmen?",
        ),
        "button-width",
      )
      .withCheckboxPrefill(false),
    // INFO: Gibt die Hintergundfarbe des Buttons an.
    cx.templatePart
      .Option(
        bsiProperty("buttons.backgroundColorLabel", "Hintergrundfarbe"),
        "button-background-color",
        bsiProperty("button.options.background"),
      )
      .withOptionPrefill(bsiProperty("button.prefill.background")),
    // INFO: Legt fest, welches Icon auf dem Button angezeigt wird (nur wirkungsvoll, wenn Icon Position gesetzt wurde).
    cx.templatePart
      .Option(
        bsiProperty(
          "button.label.icon",
          "Icon (wird nur angezeigt, wenn bei Icon Position nicht 'kein Icon' ausgewählt ist)",
        ),
        "button-icon",
        bsiProperty("button.option.icon"),
      )
      .withOptionPrefill(
        bsiProperty("button.label.prefill", "button-icon-none"),
      ),
  );
