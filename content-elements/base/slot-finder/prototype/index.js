const {cx, Version, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} urlPartId
 * @param {string} urlPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'slot-finder-dZlvGH',
  /*elementLabel = 'Slotfinder',*/
  elementLabel = 'Slotfinder',
  urlPartId = 'slot-finder-part-url-cDW6yK',
  /*urlPartLabel = 'Timeslots',*/
  urlPartLabel = 'Terminplaner',
) => cx
  .contentElement
  .withFile(template)
  .withMinVersion(Version.CX_22_0)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.COMMUNICATION)
  .withStyleConfigs(
    require('../../../../configs/styles/slot-finder-flow'),
    require('../../../../configs/styles/slot-finder-slot-size'),
    require('../../../../configs/styles/slot-finder-slots-view'))
  .withParts(
    cx.part.urlProvider
      .withId(urlPartId)
      .withLabel(urlPartLabel));