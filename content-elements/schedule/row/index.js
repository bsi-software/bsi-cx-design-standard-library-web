require('./styles.scss');

const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('schedule-row-XVVadl')
    .withLabel('Zeitslot')
    .withFile(require('./template.twig'))
    .withIcon(Icon.COMPASS)
    .withParts(
        cx.part.plainText
            .withId('schedule-day-label-IcQcw7')
            .withLabel('Datum')
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('row-events-dropzone-ANu4V7')
            .withAllowedElements(require('../event'))
    );