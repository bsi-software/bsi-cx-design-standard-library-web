const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
    .withIdentifier("accordion-head-background-b72812")
    .withLabel("Hintergrundfarbe Kopf")
    .withCssClasses(
        cx.cssClass
        .withLabel("Primärfarbe")
        .withCssClass("bg-acc-primary-color"),
        cx.cssClass
        .withLabel("Sekundärfarbe")
        .withCssClass("bg-acc-secondary-color"),
        cx.cssClass
        .withLabel("Dunkel")
        .withCssClass("bg-acc-dark-color"),
        cx.cssClass
        .withLabel("Hell")
        .withCssClass("bg-acc-light-color"),
        cx.cssClass
        .withLabel("Info Farbe")
        .withCssClass("bg-acc-info-color")
    );
