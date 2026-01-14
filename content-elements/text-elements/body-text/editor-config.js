const { EnterMode, Feature, cx } = require('@bsi-cx/design-build');

module.exports = cx.htmlEditorConfig
  .withIdentifier('editor-config-Mao2xh')
  .withFeatures(
    Feature.BOLD,
    Feature.ITALIC,
    Feature.UNDERLINE,
    Feature.FORMAT_OL,
    Feature.FORMAT_UL,
    Feature.INSERT_LINK,
    Feature.HELP)
  .withEnterMode(EnterMode.P);