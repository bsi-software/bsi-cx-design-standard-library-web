module.exports.column = {
  label: {
    element: "Spalte (Grid)",
    roundedCorners:
      "Abgerundete Ecken? (nur bei nicht transparentem Hintergrund relevant)",
    background: "Hintergrundfarbe der Spalte",
    horizontalAlignment: "Elemente horizontal ausrichten",
    verticalAlignment: "Elemente vertikal ausrichten",
    direction: "Anordnung der Elemente",
  },
  prefill: {
    roundedCorners: true,
    background: "bg-color-transparent",
    horizontalAlignment: "column-horizontal-alignment-left",
    verticalAlignment: "column-vertical-alignment-top",
    direction: "column-direction-vertical",
  },
  options: {
    background: {
      Transparent: "bg-color-transparent",
      Primary: "bg-color-primary",
      Secondary: "bg-color-secondary",
      Tertiary: "bg-color-tertiary",
      Light: "bg-color-light",
      Dark: "bg-color-dark",
    },
    horizontalAlignment: {
      Links: "column-horizontal-alignment-left",
      Zentriert: "column-horizontal-alignment-center",
      Rechts: "column-horizontal-alignment-right",
    },
    verticalAlignment: {
      Oben: "column-vertical-alignment-top",
      Mittig: "column-vertical-alignment-center",
      Unten: "column-vertical-alignment-bottom",
    },
    direction: {
      Untereinander: "column-direction-vertical",
      Nebeneinander: "column-direction-horizontal",
    },
  },
};
