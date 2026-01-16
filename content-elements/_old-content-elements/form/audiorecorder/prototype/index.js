require('./styles.scss');
const {cx, Icon} = require('@bsi-cx/design-build');

module.exports = (
  template = require('../template.twig'),
  elementId = 'audiorecorder-e89a2a',
  elementLabel = 'Audio Recorder',
  formTextPartId = 'id-file-input-c1db98',
  formTextPartLabel = 'Field ID',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.MEGAPHONE)
  .withParts(
    cx.part.formField
      .withId(formTextPartId)
      .withLabel(formTextPartLabel)
  )
  .withArchived(true);