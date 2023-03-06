const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementDescription
 * @param {string} titlePartId
 * @param {string} titlePartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'webcam-image-upload-wHe4UP',
  elementLabel = 'Webcam Selfie',
  elementDescription = "Bild mit Kamera aufnehmen und hochladen",
  formPartId = 'webcam-image-upload-part-form-X98egp',
  formPartLabel = 'Formular',
  fileformFieldPartId = 'webcam-image-upload-part-file-form-field-ZxE3ka',
  fileformFieldPartLabel = 'Dateiupload'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withDescription(elementDescription)
  .withIcon(Icon.IMAGE)
  // .withStyleConfigs(
  //   require('../../../../configs/styles/xxxxxxxxxxxxxxxxx'))
  .withParts(
    cx.part.form
      .withId(formPartId)
      .withLabel(formPartLabel),
      cx.part.formField
      .withId(fileformFieldPartId)
      .withLabel(fileformFieldPartLabel));