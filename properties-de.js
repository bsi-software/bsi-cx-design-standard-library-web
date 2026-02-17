// ------------------------------------------------------------
// Library Localization Properties (German)
//
// Purpose:
// - Contains all language-specific text values for library components,
//   such as labels, titles, messages, or descriptions.
// - One file per language, selected at build time.
//
// Notes:
// - This file must contain text values only.
// - Do NOT include styling, layout, or project-specific logic.
// - Keys should remain consistent across languages to ensure predictable lookups.
// - Component code should never contain hardcoded text; all user-facing strings
//   must be defined here.
// ------------------------------------------------------------

const baseProperties = import("./properties.js");

export default {
  ...baseProperties,
  language: "de",

  grid: {
    label: "Reihe (Template Part)",
    fullWidth: "Hintergrund volle Breite?",
    distributionLabel: "Spalten Verteilung",
    // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
    distribution: {
      auto: "auto",
      oneColumn: "1 Spalte",
    },
    backgroundColorLabel: "Hintergrundfarbe der Reihe",
    // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
    backgroundColors: {
      transparent: "Transparent",
      primary: "Primär",
      secondary: "Sekundär",
      tertiary: "Tertiär",
      dark: "Dunkel",
    },
  },

  column: {
    label: "Spalte (Grid) (Template Part)",
    roundedCornders:
      "Abgerundete Ecken? (nur bei nicht transparentem Hintergrund relevant)",
    backgroundColorLabel: "Hintergrundfarbe der Spalte",
    // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
    backgroundColors: {
      transparent: "Transparent",
      primary: "Primär",
      secondary: "Sekundär",
      tertiary: "Tertiär",
      dark: "Dunkel",
    },
    horizontalAlignmentLabel: "Elemente horizontal ausrichten",
    // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
    horizontalAlignment: {
      left: "Links",
      center: "Zentriert",
      right: "Rechts",
    },
    verticalAlignmentLabel: "Elemente vertikal ausrichten",
    // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
    verticalAlignment: {
      top: "Oben",
      middle: "Mittig",
      bottom: "Unten",
    },
    directionLabel: "Anordnung der Elemente",
    // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
    direction: {
      vertical: "Untereinander",
      horizontal: "Nebeneinander",
    },
  },

  buttons: {
    label: "Button gefüllt (Template Part)",
    roundedCorners: "Abgerundete Ecken?",
    fullWidth: "Soll der Button die ganze Breite einnehmen?",
    iconLabel:
      "Icon (wird nur angezeigt, wenn nicht 'kein Icon' ausgewählt ist)",
    // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
    icons: {
      noIcon: "Kein Icon",
      chevronLeft: "Chevron links vom Text",
      chevronRight: "Chevron rechts vom Text",
      arrowLeft: "Pfeil links vom Text",
      arrowRight: "Pfeil rechts vom Text",
    },
    bfsgLabel: "Dies ist ein Button, der einen Link beinhaltet",
    backgroundColorLabel: "Hintergrundfarbe des Buttons",
    // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
    backgroundColors: {
      transparent: "Transparent",
      primary: "Primär",
      secondary: "Sekundär",
      tertiary: "Tertiär",
      light: "Hell",
      dark: "Dunkel",
    },
  },
};
