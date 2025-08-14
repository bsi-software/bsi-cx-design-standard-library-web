const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
    .withIdentifier("accordion-head-txt-f60902")
    .withLabel("Textfarbe Kopf")
    .withCssClasses(
        cx.cssClass
        .withLabel("Primärfarbe")
        .withCssClass("txt-acc-primary-color"),
        cx.cssClass
        .withLabel("Sekundärfarbe")
        .withCssClass("txt-acc-secondary-color"),
        cx.cssClass
        .withLabel("Dunkel")
        .withCssClass("txt-acc-dark-color"),
        cx.cssClass
        .withLabel("Hell")
        .withCssClass("txt-acc-light-color"),
        cx.cssClass
        .withLabel("Info Farbe")
        .withCssClass("txt-acc-info-color")
    );
