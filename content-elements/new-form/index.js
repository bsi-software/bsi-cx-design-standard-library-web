const { cx } = require("@bsi-cx/design-build");

// TODO B4: discuss aproach
module.exports.group = cx.contentElementGroup
.withGroupId('form-v2-YUS6Y9')
.withLabel("Formular v2")
.withContentElements(
    require('./form-container'),
    require('./form-section'),
    ...require('./form-elements').newFormElements
)