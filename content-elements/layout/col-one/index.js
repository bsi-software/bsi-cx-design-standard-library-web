const {cx, Icon} = require('@bsi-cx/design-build');
const {advancedElements} = require('../../advanced');
const {contentElements} = require('../../base');

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element.withElementId('col-one-l2ZclN')
  .withFile(require('./template.twig'))
  /*.withLabel('1 Column')*/
  .withLabel('1 Spalte')
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(
    require('../../../configs/styles/col-width'),
    require('../../../configs/styles/col-spacing'),
    require('../../../configs/styles/col-gap'),
    require('../../../configs/styles/col-alignment'),
    require('../../../configs/styles/background-color'),
    require('../../../configs/styles/color-gradient'),
    require('../../../configs/styles/background-opacity'))
  .withDropzones(
    cx.dropzone
      .withDropzone('col-one-dropzone-OzGBbS')
      .withAllowedElements(
        element,
        require('../col-two'),
        require('../col-three'),
        require('../col-four'),
        require('../spacer'),
        require('../../base/banner'),
        ...contentElements,
        ...advancedElements,
        require('../../form/form-container'),
        require('../../form/form-pin')));