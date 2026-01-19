const { TemplateElement, Icon, cx, bsiProperty } = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
  .withElementId("bsi-button-filled-ZNfhKO")
  .withLabel("Button")
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.MEGAPHONE)
  .withTemplateParts(
    cx.templatePart.Link("Button Link", "button-link-mbjVlk")
      .withLinkPrefill("#", bsiProperty("button.linkText", "" /* defined in properties.js */)),
    // INFO: Gibt die Hintergundfarbe des Buttons an.
    cx.templatePart.Option("Hintergrundfarbe des Buttons", "button-background-color-eydth1",
      bsiProperty("button.backgroundOptions", { /* defined in properties.js */ })).withOptionPrefill(),
    // INFO: Legt fest, welches Icon auf dem Button angezeigt wird (nur wirkungsvoll, wenn Icon Position gesetzt wurde).
    cx.templatePart.Option("Icon (wird nur angezeigt, wenn bei Icon Position nicht 'kein Icon' ausgewählt ist)", "button-icon-qj3zlU",
      bsiProperty("button.iconOptions", { /* defined in properties.js */ })).withOptionPrefill(),
  );
