const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
    .withIdentifier("accordion-head-background-b72812")
    .withLabel("Accordion head background color")
    .withCssClasses(
        cx.cssClass
        .withLabel("Primary")
        .withCssClass("bg-acc-primary"),
        cx.cssClass
        .withLabel("Secondary")
        .withCssClass("bg-acc-secondary"),
        cx.cssClass
        .withLabel("Dark color")
        .withCssClass("bg-acc-dark-color"),
        cx.cssClass
        .withLabel("Light color")
        .withCssClass("bg-acc-light-color"),
        cx.cssClass
        .withLabel("Info color")
        .withCssClass("bg-acc-info-color")
    );
