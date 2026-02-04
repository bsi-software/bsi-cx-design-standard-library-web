const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
  .withIdentifier("column-vertical-alignment-83345b1d")
  .withLabel("Vertikale Ausrichtung")
  .withCssClasses(
    cx.cssClass.withLabel("Oben").withCssClass("column-vertical-alignment-top"),
    cx.cssClass
      .withLabel("Mittig")
      .withCssClass("column-vertical-alignment-center"),
    cx.cssClass
      .withLabel("Unten")
      .withCssClass("column-vertical-alignment-bottom"),
  );
