import cx from "@bsi-cx/design-build";

export default cx.style
  .withIdentifier("column-background-color-80ed9ce9")
  .withLabel("Hintergrundfarbe")
  .withCssClasses(
    cx.cssClass.withLabel("Transparent").withCssClass("bg-color-transparent"),
    cx.cssClass.withLabel("Primary").withCssClass("bg-color-primary"),
    cx.cssClass.withLabel("Secondary").withCssClass("bg-color-secondary"),
    cx.cssClass.withLabel("Tertiary").withCssClass("bg-color-tertiary"),
    cx.cssClass.withLabel("Light").withCssClass("bg-color-light"),
    cx.cssClass.withLabel("Dark").withCssClass("bg-color-dark"),
  );
