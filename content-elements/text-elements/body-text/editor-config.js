const { EnterMode, Feature, cx } = require('@bsi-cx/design-build');

module.exports = cx.htmlEditorConfig
  .withIdentifier('editor-config-Mao2xh')
  .withFeatures(
    Feature.BOLD,
    Feature.ITALIC,
    Feature.UNDERLINE,
    Feature.FONT_SIZE,
    Feature.LINE_HEIGHT,
    Feature.TEXT_COLOR,
    Feature.ALIGN_LEFT,
    Feature.ALIGN_CENTER,
    Feature.ALIGN_RIGHT,
    Feature.ALIGN_JUSTIFY,
    Feature.FORMAT_OL,
    Feature.FORMAT_UL,
    Feature.INSERT_LINK,
    Feature.HELP)
  // INFO: Colors must be specified as HEX values here because Bootstrap variables are not available in this context.
  .withTextColors('#282322', '#ffffff', '#0082a1', '#fe9915', '#2bb198')
  .withFontSizes(12, 14, 16, 24, 36, 48, 72)
  .withFontSizeDefault(16)
  .withLineHeights(1, 1.15, 1.5, 2)
  .withEnterMode(EnterMode.P);
;