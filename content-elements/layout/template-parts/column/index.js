// require("./styles.scss");

const { TemplateElement, Icon, cx } = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
  .withElementId("bsi-grid-column-G0PwWz")
  .withLabel("Spalte (Grid) (Template Part)")
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.ONE_COLUMN)
  .withRawContextFile(require("./context.json"))
  .withTemplateParts(
    // Tooltip: Gibt an, ob die Splaten abgerundete Ecken haben oder nicht. Dies hat nur auswirkungen auf Spalten, die keinen transparenten hintergrund haben.
    cx.templatePart.Checkbox("Abgerundete Ecken? (nur bei nicht transparentem Hintergrund relevant)", "column-rounded-corners-J2lsXv"),
    // Tooltip: Gibt die Hintergundfarbe der Spalte an.
    cx.templatePart.Option("Hintergrundfarbe der Spalte", "column-background-color-XzF28g", {
        "Transparent" : "bg-color-transparent",
        "Primary" : "bg-color-primary",
        "Secondary" : "bg-color-secondary",
        "Tertiary" : "bg-color-tertiary",
        "Light": "bg-color-light",
        "Dark" : "bg-color-dark",
    }),
    // Tooltip: Bestimmt, wie die Elemente innerhalb der Spalte horizontal angeordnert werden.
    cx.templatePart.Option("Elemente horizontal ausrichten", "column-horizontal-alignment-2AmT0r", {
        "Links" : "column-horizontal-alignment-left",
        "Zentriert" : "column-horizontal-alignment-center",
        "Rechts" : "column-horizontal-alignment-right",
    }),
    // TODO: When complexity levels are introduced, move this code to the appropriate complexity layer.
    // Tooltip: Legt fest, wie die Elemente innerhalb in der Höhe der Spalte positioniert werden.
    cx.templatePart.Option("Elemente vertikal ausrichten", "column-vertical-alignment-LuY0Fn", {
        "Oben" : "column-vertical-alignment-top",
        "Mittig" : "column-vertical-alignment-center",
        "Unten" : "column-vertical-alignment-bottom",
    }),
    // TODO: When complexity levels are introduced, move this code to the appropriate complexity layer.
    // Tooltip: Bestimmt, ob die Elemente in der Spalte untereinander oder nebeneinander angeordnet sind.
    cx.templatePart.Option("Anordnung der Elemente", "column-direction-YjtUbZ", {
        "Untereinander" : "column-direction-vertical",
        "Nebeneinander" : "column-direction-horizontal",
    }),
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("bsi-grid-column-dropzone-0Dv7Uo")
  );
