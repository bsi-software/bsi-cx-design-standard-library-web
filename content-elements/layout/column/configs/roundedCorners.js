const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
  .withIdentifier("column-rounded-corners-bf0f5ebc")
  .withLabel("Abgerundete Ecken")
  .withCssClasses(
    cx.cssClass.withLabel("Ja").withCssClass("column-rounded-corners"),
    cx.cssClass.withLabel("Nein").withCssClass("column-none-rounded-corners"),
  );
