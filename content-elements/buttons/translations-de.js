// ------------------------------------------------------------
// Button Localization Properties (German)
//
// Purpose:
// - Contains all language-specific text values related to button elements,
//   such as labels, stylenames, or accessibility text.
// - This file belongs to the "Buttons" element group.
//
// Notes:
// - This file must contain text values only.
// - Do NOT include styling, layout, or component logic.
// - Keys should remain consistent across languages to ensure predictable lookups.
// - Button components must not contain hardcoded text;
//   all user-facing strings should be defined here.
// ------------------------------------------------------------

module.exports = {
  buttons: {
    label: "Button gefüllt (Template Part)",
    roundedCorners: "Abgerundete Ecken?",
    fullWidth: "Soll der Button die ganze Breite einnehmen?",
    iconLabel: "Icon",
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
