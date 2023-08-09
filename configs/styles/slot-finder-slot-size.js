const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
    .withIdentifier('slots-finder-slot-size-fjRdbB')
    /*.withLabel('Slots view')*/
    .withLabel('Slotanzeige')
    .withCssClasses(
        cx.cssClass
            /*.withLabel('Automatic')*/
            .withLabel('Normal')
            .withCssClass('default-slots'), 
        cx.cssClass
            /*.withLabel('Only starting times')*/
            .withLabel('Nur Startzeiten')
            .withCssClass('small-slots'));
