const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
  .withIdentifier("column-horizontal-alignment-a18afb60")
  .withLabel("Vertikale Ausrichtung")
  .withCssClasses(
    cx.cssClass
      .withLabel("Links")
      .withCssClass("column-horizontal-alignment-left"),
    cx.cssClass
      .withLabel("Mittig")
      .withCssClass("column-horizontal-alignment-center"),
    cx.cssClass
      .withLabel("Rechts")
      .withCssClass("column-horizontal-alignment-right"),
  );
