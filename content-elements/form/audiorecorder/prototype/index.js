require('./styles.scss');
const {cx, Icon} = require('@bsi-cx/design-build');

module.exports = (
  template = require('../template.twig'),
  elementId = 'audiorecorder-e89a2a',
  elementLabel = 'Audio Recorder',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel);