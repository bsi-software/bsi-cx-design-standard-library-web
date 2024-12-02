require('./styles.scss');

const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('schedule-day-68IBcs')
    .withLabel('Tag')
    .withFile(require('./template.twig'))
    .withIcon(Icon.COMPASS)
    .withParts(
        cx.part.plainText
            .withId('schedule-day-label-IcQcw7')
            .withLabel('Datum')
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('schedule-rows-dropzone-OJmpt5')
            .withAllowedElements(require('../row'))
    );