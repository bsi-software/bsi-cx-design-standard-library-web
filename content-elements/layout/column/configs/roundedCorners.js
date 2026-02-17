import cx from "@bsi-cx/design-build";

export default cx.style
  .withIdentifier("column-rounded-corners-bf0f5ebc")
  .withLabel("Abgerundete Ecken")
  .withCssClasses(
    cx.cssClass.withLabel("Ja").withCssClass("column-rounded-corners"),
    cx.cssClass.withLabel("Nein").withCssClass("column-none-rounded-corners"),
  );
