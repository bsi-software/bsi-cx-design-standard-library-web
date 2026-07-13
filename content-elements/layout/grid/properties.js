module.exports.grid = {
  label: {
    element: "Reihe (Template Part)",
    fullWidth: "Hintergrund volle Breite?",
    distribution: "Spalten Verteilung",
    background: "Hintergrundfarbe der Row",
  },
  prefill: {
    fullWidth: false,
    distribution: "grid-template-1",
    background: "bg-color-transparent",
  },
  options: {
    distribution: {
      auto: "grid-template-auto",
      "1 Spalte": "grid-template-1",
      "1:1": "grid-template-1-1",
      "2:1": "grid-template-2-1",
      "1:2": "grid-template-1-2",
    },
    background: {
      Transparent: "bg-color-transparent",
      Primary: "bg-color-primary",
      Secondary: "bg-color-secondary",
      Tertiary: "bg-color-tertiary",
      Dark: "bg-color-dark",
    },
  },
};
