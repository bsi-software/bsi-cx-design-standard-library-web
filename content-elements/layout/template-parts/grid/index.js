const { TemplateElement, Icon, cx, bsiProperty } = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
  .withElementId("bsi-grid-v68Eos")
  .withLabel("Reihe (Template Part)")
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.THREE_COLUMNS)
  .withTemplateParts(
    cx.templatePart.Checkbox("Hintergrund volle Breite?", "grid-expand-background-7h1Mpz").withCheckboxPrefill(false),
    cx.templatePart.Option("Spalten Verteilung", "grid-template-XepNDf", bsiProperty("grid.columnOptions", { /* defined in properties.js */ })).withOptionPrefill(),
    cx.templatePart.Option("Hintergrundfarbe der Row", "grid-background-color-cN3IpC", bsiProperty("grid.backgroundOptions", { /* defined in properties.js */ })).withOptionPrefill(),
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("bsi-grid-dropzone-QYpcxP")
      .withAllowedElements(
        require("../column"),
      )
  );