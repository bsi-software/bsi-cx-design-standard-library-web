const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('grid-gap-60951717')
    .withLabel('Gap zwischen den Spalten und zeilen')
    .withCssClasses(
        cx.cssClass
            .withLabel('Klein')
            .withCssClass('grid-gap-small'),
        cx.cssClass
            .withLabel('Mittel')
            .withCssClass('grid-gap-medium'),
        cx.cssClass
            .withLabel('Groß')
            .withCssClass('grid-gap-large'),
    );