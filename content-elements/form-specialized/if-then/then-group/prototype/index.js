const { cx, Icon } = require('@bsi-cx/design-build');

/**
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'then-group-0HfARz',
  /*elementLabel = 'Form field',*/
  elementLabel = 'Dann-Gruppe',
  /*elementDescription = 'Text, e-mail, date/time, password, file, number, range',*/
  elementDescription = 'Sichtbarkeit wird von der Wenn-Gruppe gesteuert',
  conditionPartId = 'then-group-condition-part-UF47Zh',
  /*elementPartLabel = 'Form field',*/
  conditionPartLabel = 'Sichtbar wenn',
  dropzoneId = 'depending-dropzone-MUq0Kd',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.HANDSHAKE)
  .withStyleConfigs(require('../../../../../configs/styles/then-group-required'))
  .withParts(
    cx.part.plainText
      .withId(conditionPartId)
      .withLabel(conditionPartLabel))
  .withDropzones(cx.dropzone.withDropzone(dropzoneId).withAllowedElements(
    // TODO: all form elements
  ));