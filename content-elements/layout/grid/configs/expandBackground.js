const { cx } = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('grid-expand-background-b17f4d2d')
    .withLabel('Hintergrund volle Breite')
    .withCssClasses(
        cx.cssClass
            .withLabel('Ja')
            .withCssClass('grid-expand-background'),
        cx.cssClass
            .withLabel('Nein')
            .withCssClass('grid-normal-background'),
    );