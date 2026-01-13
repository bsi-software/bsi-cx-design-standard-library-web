// ------------------------------------------------------------
// Library Localization Properties (English)
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
  language: 'en',

  buttons: {
    label: "Button filled (Template Part)",
    roundedCorners: "Rounded Corners?",
    fullWidth: "Should the button take up the entire width?",
    iconLabel: "Icon (only displayed if 'No icon' is not selected for Icon position)",
    // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
    icons: {
        noIcon: "No Icon",
        chevronLeft: "Chevron to the left of the text",
        chevronRight: "Chevron to the right of the text",
        arrowLeft: "Arrow to the left of the text",
        arrowRight: "Arrow to the right of the text",
    },
    bfsgLabel: "This is a button that contains a link.",
    backgroundColorLabel: "Background color of the button",
    // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
    backgroundColors: {
        transparent: "Transparent",
        primary: "Primary",
        secondary: "Sekundary",
        tertiary: "Tertiary",
        light: "Light",
        dark: "Dark"
    },
  },

}