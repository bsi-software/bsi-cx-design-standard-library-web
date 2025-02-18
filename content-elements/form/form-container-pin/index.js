require('./styles.scss');
const {cx, Icon} = require('@bsi-cx/design-build');

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element.withFile(require('./template.twig'))
  .withElementId('form-container-pin-384aa4d6')
  /*.withLabel('Form')*/
  .withLabel('Pin-Element')
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(
    require('../../../configs/styles/form-width'),
    require('../../../configs/styles/form-layout'),
    require('../../../configs/styles/form-color'),
    require('../../../configs/styles/form-info-text'))
  .withParts(
    cx.part.form
      .withId('form-container-pin-30c44d0d')
      /*.withLabel('Form'))*/
      .withLabel('Pin-Element'))
  .withDropzones(
    cx.dropzone
      .withDropzone('form-container-dropzone-6b6f360e')
      .withAllowedElements(
        require('../form-pin')));