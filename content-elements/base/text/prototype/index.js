const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} textPartId
 * @param {string} textPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'text-kkq2fq',
  elementLabel = 'Text',
  textPartId = 'text-part-Fjse59',
  textPartLabel = 'Text'
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.TEXT)
  .withStyleConfigs(
    require('../../../../configs/styles/text-size'))
  .withParts(
    cx.part.formattedText
      .withHtmlEditorConfig(require('../../../../configs/editor/full.js'))
      .withId(textPartId)
      .withLabel(textPartLabel));