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

const baseProperties = require('./properties');

module.exports = {
  ...baseProperties,
  language: 'de',

  buttons: {
    label: "Button gefüllt (Template Part)",
    roundedCorners: "Abgerundete Ecken?",
    fullWidth: "Soll der Button die ganze Breite einnehmen?",
    iconLabel: "Icon (wird nur angezeigt, wenn nicht 'kein Icon' ausgewählt ist)",
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
        dark: "Dunkel"
    },
  },

}