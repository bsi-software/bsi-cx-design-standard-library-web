require('./styles.scss');

const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('schedule-event-6GC7Ls')
    .withLabel('Programmpunkt')
    .withFile(require('./template.twig'))
    .withIcon(Icon.COMPASS)
    .withStyleConfigs(
        require('../../../configs/styles/event-background')
    )
    .withParts(
        cx.part.plainText
            .withId('event-time-FcfDRX')
            .withLabel('Uhrzeit'),
        cx.part.plainText
            .withId('event-room-qcny5Y')
            .withLabel('Raum'),
        cx.part.plainText
            .withId('event-title-unhmXA')
            .withLabel('Titel'),
        cx.part.plainText
            .withId('event-speaker-6vYPyO')
            .withLabel('Speaker'),
        cx.part.plainText
            .withId('event-speaker-company-2yaglg')
            .withLabel('Firma'),
        cx.part.image
            .withId('event-speaker-img-wX17Nt')
            .withLabel('Speaker'),
        cx.part.formattedText
            .withId('event-description-U78Fcj')
            .withHtmlEditorConfig(require('@bsi-cx/design-standard-library-web/configs/editor/full'))
            .withLabel('Beschreibung'),
    );