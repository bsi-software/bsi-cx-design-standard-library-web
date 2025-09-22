const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = (
  template = require('../template.twig'),
  elementId = 'if-layout-TljhJw',
  elementLabel = 'Wenn-Gruppe',
  elementDescription = 'steuert die Sichtbarkeit mehrerer Dann-Gruppen',
  ifDropzoneId = 'if-container-Ys0IFw',
  thenDropzoneId = 'then-container-KQoqAa') =>
  cx
    .contentElement
    .withElementId(elementId)
    .withLabel(elementLabel)
    .withDescription(elementDescription)
    .withIcon(Icon.HANDSHAKE)
    .withFile(template)
    .withDropzones(
      cx.dropzone.withDropzone(ifDropzoneId)
        .withAllowedElements(
          require('../../../select'),
          require('../../../checkbox'),
          require('../../../radio'))
        .withMaxAllowedElements(1),
      cx.dropzone.withDropzone(thenDropzoneId)
        .withAllowedElements(require('./../../then-group'))
    );
