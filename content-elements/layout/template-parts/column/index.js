import { TemplateElement, Icon, cx, bsiProperty } from "@bsi-cx/design-build";

/**
 * @type {TemplateElement}
 */
export default cx.templateElement
  .withElementId("bsi-grid-column-G0PwWz")
  .withLabel(bsiProperty("column.label", "Spalte (Grid) (Template Part)"))
  .withFile(import("./template.hbs.twig"))
  .withIcon(Icon.ONE_COLUMN)
  .withTemplateParts(
    // INFO: Gibt an, ob die Splaten abgerundete Ecken haben oder nicht. Dies hat nur auswirkungen auf Spalten, die keinen transparenten hintergrund haben.
    cx.templatePart
      .Checkbox(
        bsiProperty(
          "column.roundedCorners",
          "Abgerundete Ecken? (nur bei nicht transparentem Hintergrund relevant)",
        ),
        "column-rounded-corners-J2lsXv",
      )
      .withCheckboxPrefill(true),
    // INFO: Gibt die Hintergundfarbe der Spalte an.
    cx.templatePart
      .Option(
        bsiProperty(
          "column.backgroundColorLabel",
          "Hintergrundfarbe der Spalte",
        ),
        "column-background-color-XzF28g",
        {
          // TODO: Wie machen wir die Übersetzug von den Optionen?
          Transparent: "bg-color-transparent",
          Primary: "bg-color-primary",
          Secondary: "bg-color-secondary",
          Tertiary: "bg-color-tertiary",
          Light: "bg-color-light",
          Dark: "bg-color-dark",
        },
      )
      .withOptionPrefill("bg-color-transparent"),
    // INFO: Bestimmt, wie die Elemente innerhalb der Spalte horizontal angeordnert werden.
    cx.templatePart
      .Option(
        bsiProperty(
          "column.horizontalAlignmentLabel",
          "Elemente horizontal ausrichten",
        ),
        "column-horizontal-alignment-2AmT0r",
        {
          // TODO: Wie machen wir die Übersetzug von den Optionen?
          Links: "column-horizontal-alignment-left",
          Zentriert: "column-horizontal-alignment-center",
          Rechts: "column-horizontal-alignment-right",
        },
      )
      .withOptionPrefill("column-horizontal-alignment-left"),
    // TODO: When complexity levels are introduced, move this code to the appropriate complexity layer.
    // INFO: Legt fest, wie die Elemente innerhalb in der Höhe der Spalte positioniert werden.
    cx.templatePart
      .Option(
        bsiProperty(
          "column.verticalAlignmentLabel",
          "Elemente vertikal ausrichten",
        ),
        "column-vertical-alignment-LuY0Fn",
        {
          // TODO: Wie machen wir die Übersetzug von den Optionen?
          Oben: "column-vertical-alignment-top",
          Mittig: "column-vertical-alignment-center",
          Unten: "column-vertical-alignment-bottom",
        },
      )
      .withOptionPrefill("column-vertical-alignment-top"),
    // TODO: When complexity levels are introduced, move this code to the appropriate complexity layer.
    // INFO: Bestimmt, ob die Elemente in der Spalte untereinander oder nebeneinander angeordnet sind.
    cx.templatePart
      .Option(
        bsiProperty("column.directionLabel", "Anordnung der Elemente"),
        "column-direction-YjtUbZ",
        {
          // TODO: Wie machen wir die Übersetzug von den Optionen?
          Untereinander: "column-direction-vertical",
          Nebeneinander: "column-direction-horizontal",
        },
      )
      .withOptionPrefill("column-direction-vertical"),
  )
  .withDropzones(cx.dropzone.withDropzone("bsi-grid-column-dropzone-0Dv7Uo"));
