// ------------------------------------------------------------
// Button Localization Properties (English)
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