require('./styles.scss');

module.exports = require('./prototype')();
module.exports.editor = (textEditorConfig) =>
  require('./prototype')(
    require('./template.twig'),
    'text-kkq2fq',
    'Text',
    'text-part-Fjse59',
    'Text',
    textEditorConfig
  );
