const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('grid-background-color-d053edf9')
    .withLabel('Hintergrundfarbe')
    .withCssClasses(
        cx.cssClass
            .withLabel('Transparent')
            .withCssClass('grid-background-color-transparent'),
        cx.cssClass
            .withLabel('Primary')
            .withCssClass('grid-background-color-primary'),
        cx.cssClass
            .withLabel('Secondary')
            .withCssClass('grid-background-color-secondary'),
        cx.cssClass
            .withLabel('Tertiary')
            .withCssClass('grid-background-color-tertiary'),
        cx.cssClass
            .withLabel('Dark')
            .withCssClass('grid-background-color-dark'),
    );