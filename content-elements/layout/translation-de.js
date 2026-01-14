// ------------------------------------------------------------
// Layout Localization Properties (German)
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
        label: "Reihe (Template Part)",
        fullWidth: "Hintergrund volle Breite?",
        distributionLabel: "Spalten Verteilung",
        // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
        distribution: {
        auto: "auto",
        oneColumn: "1 Spalte"
        },
        backgroundColorLabel: "Hintergrundfarbe der Reihe",
        // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
        backgroundColors: {
        transparent: "Transparent",
        primary: "Primär",
        secondary: "Sekundär",
        tertiary: "Tertiär",
        dark: "Dunkel"
        }
    },

    column: {
        label: "Spalte (Grid) (Template Part)",
        roundedCornders: "Abgerundete Ecken? (nur bei nicht transparentem Hintergrund relevant)",
        backgroundColorLabel: "Hintergrundfarbe der Spalte",
        // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
        backgroundColors: {
        transparent: "Transparent",
        primary: "Primär",
        secondary: "Sekundär",
        tertiary: "Tertiär",
        dark: "Dunkel"
        },
        horizontalAlignmentLabel: "Elemente horizontal ausrichten",
        // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
        horizontalAlignment: {
        left: "Links",
        center: "Zentriert",
        right: "Rechts"
        },
        verticalAlignmentLabel: "Elemente vertikal ausrichten",
        // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
        verticalAlignment: {
        top: "Oben",
        middle: "Mittig",
        bottom: "Unten"
        },
        directionLabel: "Anordnung der Elemente",
        // TODO: Übersetzung ist hier vorbereitet, aber kann nicht genutzt werden momentan -> Lösung finden
        direction: {
        vertical: "Untereinander",
        horizontal: "Nebeneinander"
        }
    },

}