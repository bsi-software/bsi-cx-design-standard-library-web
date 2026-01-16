const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('grid-background-color-d053edf9')
    .withLabel('Hintergrundfarbe')
    .withCssClasses(
        cx.cssClass
            .withLabel('Transparent')
            .withCssClass('bg-color-transparent'),
        cx.cssClass
            .withLabel('Primary')
            .withCssClass('bg-color-primary'),
        cx.cssClass
            .withLabel('Secondary')
            .withCssClass('bg-color-secondary'),
        cx.cssClass
            .withLabel('Tertiary')
            .withCssClass('bg-color-tertiary'),
        cx.cssClass
            .withLabel('Dark')
            .withCssClass('bg-color-dark'),
    );