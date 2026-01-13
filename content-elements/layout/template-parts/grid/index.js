// require("./styles.scss");

const { TemplateElement, Icon, cx, bsiProperty } = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
  .withElementId("bsi-grid-v68Eos")
  .withLabel(bsiProperty("grid.label", "Reihe (Template Part)"))
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.THREE_COLUMNS)
  .withTemplateParts(
    cx.templatePart.Checkbox(bsiProperty("grid.fullWidth", "Hintergrund volle Breite?"), "grid-expand-background-7h1Mpz").withCheckboxPrefill(false),
    cx.templatePart.Option(bsiProperty("grid.distributionLabel", "Spalten Verteilung"), "grid-template-XepNDf", {
      // TODO: Wie machen wir die Übersetzug von den Optionen?
      "auto" : "grid-template-auto",
      "1 Spalte" : "grid-template-1",
      "1:1" : "grid-template-1-1",
      "2:1" : "grid-template-2-1",
      "1:2" : "grid-template-1-2",
    }).withOptionPrefill("grid-template-1"),
    cx.templatePart.Option(bsiProperty("grid.backgroundColorLabel", "Hintergrundfarbe der Row"), "grid-background-color-cN3IpC", {
      // TODO: Wie machen wir die Übersetzug von den Optionen?
      "Transparent" : "bg-color-transparent",
      "Primary" : "bg-color-primary",
      "Secondary" : "bg-color-secondary",
      "Tertiary" : "bg-color-tertiary",
      "Dark" : "bg-color-dark",
    }).withOptionPrefill("bg-color-transparent"),
  )
  .withDropzones(
    cx.dropzone
    .withDropzone("bsi-grid-dropzone-QYpcxP")
    .withAllowedElements(
      require("../column"),
    )
  )
;