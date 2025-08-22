const { cx } = require('@bsi-cx/design-build');

const specializedFormElements = [
    require('./if-then/if-layout'),
    require('./if-then/then-group'),
]

module.exports.elements = specializedFormElements;
module.exports.group = cx.contentElementGroup
    .withGroupId('specialized-form-MtaqUC')
    .withLabel('Formular - Erweitert')
    .withContentElements(...specializedFormElements)
