require('./../mobile.scss');
require('./../event-info.scss');

const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('schedule-container-VCR5nH')
    .withLabel('Programmablauf')
    .withFile(require('./template.twig'))
    .withIcon(Icon.COMPASS)
    .withDropzones(
        cx.dropzone.withDropzone('schedule-days-QErh77')
            .withAllowedElements(require('../day'))
    )