const { advancedElements } = require('./advanced');
const { contentElements } = require('./base');
const { formElements } = require('./form');
const { layoutElements } = require('./layout');

const oldContentElements = [
  ...layoutElements,
  ...contentElements,
  ...advancedElements,
  ...formElements,
  require('../../content-elements/old-content-elements/form/form-container'),
  require('../../content-elements/old-content-elements/form/if-then/if-layout'),
  require('../../content-elements/old-content-elements/form/if-then/then-group'),
  require('../../content-elements/old-content-elements/form/multi-column'),
];

module.exports.oldContentElements = oldContentElements;
module.exports.group = cx.contentElementGroup
  .withGroupId('old-content-elements-6657fcec')
  .withLabel('Alte Content Elemente')
  .withContentElements(
    ...oldContentElements
  );