// ------------------------------------------------------------
// Layout Localization Properties (English)
//
// Purpose:
// - Contains all language-specific text values related to layout elements,
//   such as labels or stylenames.
// - This file belongs to the "Layout" element group.
//
// Notes:
// - This file must contain text values only.
// - Do NOT include styling, layout, or component logic.
// - Keys should remain consistent across languages to ensure predictable lookups.
// - Layout components must not contain hardcoded text;
//   all user-facing strings should be defined here.
// ------------------------------------------------------------

module.exports = {

    grid: {
        label: "Row (Template Part)",
        fullWidth: "Full width background?",
        distributionLabel: "Column distribution",
        // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
        distribution: {
        auto: "auto",
        oneColumn: "1 column"
        },
        backgroundColorLabel: "Background color of the row",
        // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
        backgroundColors: {
        transparent: "Transparent",
        primary: "Primary",
        secondary: "Sekundary",
        tertiary: "Tertiary",
        dark: "Dark"
        }
    },

    column: {
        label: "Column (Grid) (Template Part)",
        roundedCornders: "Rounded corners? (only relevant for non-transparent backgrounds)",
        backgroundColorLabel: "Background color of the column",
        // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
        backgroundColors: {
        transparent: "Transparent",
        primary: "Primary",
        secondary: "Sekundary",
        tertiary: "Tertiary",
        light: "Light",
        dark: "Dark"
        },
        horizontalAlignmentLabel: "Align elements horizontally",
        // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
        horizontalAlignment: {
        left: "Left",
        center: "Center",
        right: "Right"
        },
        verticalAlignmentLabel: "Align elements vertically",
        // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
        verticalAlignment: {
        top: "Top",
        middle: "Middle",
        bottom: "Bottom"
        },
        directionLabel: "Arrangement of elements",
        // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
        direction: {
        vertical: "Below each other",
        horizontal: "Side by side"
        }
    },

}