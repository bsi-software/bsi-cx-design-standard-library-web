// require("./styles.scss");

const { TemplateElement, Icon, cx, bsiProperty } = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
  .withElementId("bsi-grid-column-G0PwWz")
  .withLabel(bsiProperty("column.label", "Spalte (Grid) (Template Part)"))
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.ONE_COLUMN)
  .withTemplateParts(
    // INFO: Gibt an, ob die Splaten abgerundete Ecken haben oder nicht. Dies hat nur auswirkungen auf Spalten, die keinen transparenten hintergrund haben.
    cx.templatePart.Checkbox("Abgerundete Ecken? (nur bei nicht transparentem Hintergrund relevant)", "column-rounded-corners-J2lsXv").withCheckboxPrefill(true),
    // INFO: Gibt die Hintergundfarbe der Spalte an.
    cx.templatePart.Option("Hintergrundfarbe der Spalte", "column-background-color-XzF28g", bsiProperty("column.backgroundColor", {/** defined in properties */})).withOptionPrefill(),
    // INFO: Bestimmt, wie die Elemente innerhalb der Spalte horizontal angeordnert werden.
    cx.templatePart.Option("Elemente horizontal ausrichten", "column-horizontal-alignment-2AmT0r", bsiProperty('column.horizontalOptions', {/** defined in properties */})).withOptionPrefill(),
    // TODO: When complexity levels are introduced, move this code to the appropriate complexity layer.
    // INFO: Legt fest, wie die Elemente innerhalb in der Höhe der Spalte positioniert werden.
    cx.templatePart.Option("Elemente vertikal ausrichten", "column-vertical-alignment-LuY0Fn", bsiProperty("column.verticalOptions" , {/** defined in properties */})).withOptionPrefill(),
    // TODO: When complexity levels are introduced, move this code to the appropriate complexity layer.
    // INFO: Bestimmt, ob die Elemente in der Spalte untereinander oder nebeneinander angeordnet sind.
    cx.templatePart.Option("Anordnung der Elemente", "column-direction-YjtUbZ", bsiProperty("column.directionOptions", {/** defined in properties */})).withOptionPrefill(),
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("bsi-grid-column-dropzone-0Dv7Uo")
  );
