// require("./styles.scss");

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
  .withElementId("bsi-grid-v68Eos")
  .withLabel(bsiProperty("grid.label.element", "Reihe (Template Part)"))
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.THREE_COLUMNS)
  .withTemplateParts(
    cx.templatePart
      .Checkbox(
        bsiProperty("grid.label.fullWidth", "Hintergrund volle Breite?"),
        "grid-expand-background-7h1Mpz",
      )
      .withCheckboxPrefill(bsiProperty("grid.prefill.fullWidth", false)),
    cx.templatePart
      .Option(
        bsiProperty("grid.label.distribution", "Spalten Verteilung"),
        "grid-template-XepNDf",
        bsiProperty("grid.options.distribution"),
      )
      .withOptionPrefill("grid-template-1"),
    cx.templatePart
      .Option(
        bsiProperty("grid.label.background", "Hintergrundfarbe der Row"),
        "grid-background-color-cN3IpC",
        bsiProperty("grid.options.background"),
      )
      .withOptionPrefill("grid.prefill.background"),
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("bsi-grid-dropzone-QYpcxP")
      .withAllowedElements(require("../column")),
  );
