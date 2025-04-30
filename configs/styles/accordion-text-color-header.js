const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
    .withIdentifier("accordion-head-txt-f60902")
    .withLabel("Accordion head text color")
    .withCssClasses(
        cx.cssClass
        .withLabel("Primary")
        .withCssClass("txt-acc-primary"),
        cx.cssClass
        .withLabel("Secondary")
        .withCssClass("txt-acc-secondary"),
        cx.cssClass
        .withLabel("Dark color")
        .withCssClass("txt-acc-dark-color"),
        cx.cssClass
        .withLabel("Light color")
        .withCssClass("txt-acc-light-color"),
        cx.cssClass
        .withLabel("Info color")
        .withCssClass("txt-acc-info-color")
    );
