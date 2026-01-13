// require("./styles.scss");

const { TemplateElement, Icon, cx } = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
  .withElementId("bsi-grid-v68Eos")
  .withLabel("Row (Template Part)")
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.THREE_COLUMNS)
  .withRawContextFile(require("./context.json"))
  .withTemplateParts(
    cx.templatePart.Checkbox("Hintergrund volle Breite?", "grid-expand-background-7h1Mpz"),
    cx.templatePart.Option("Spalten Verteilung", "grid-template-XepNDf", {
        "auto" : "grid-template-auto",
        "1 Spalte" : "grid-template-1",
        "1:1" : "grid-template-1-1",
        "2:1" : "grid-template-2-1",
        "1:2" : "grid-template-1-2",
    }),
    cx.templatePart.Option("Hintergrundfarbe der Row", "grid-background-color-cN3IpC", {
        "Transparent" : "bg-color-transparent",
        "Primary" : "bg-color-primary",
        "Secondary" : "bg-color-secondary",
        "Tertiary" : "bg-color-tertiary",
        "Dark" : "bg-color-dark",
    }),
  )
  .withDropzones(
    cx.dropzone
    .withDropzone("bsi-grid-dropzone-QYpcxP")
    .withAllowedElements(
      require("../column"),
    )
  )
;