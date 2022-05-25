require('./styles.scss');
const {cx, Icon} = require('@bsi-cx/design-build');
const {contentElements} = require('../../base');
const {formElements} = require('../index');

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element.withFile(require('./template.twig'))
  .withElementId(`form-container-692qIu`)
  .withLabel('Form')
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(
    require('../../../configs/styles/form-width'),
    require('../../../configs/styles/form-layout'),
    require('../../../configs/styles/border-radius'),
    require('../../../configs/styles/form-label'),
    require('../../../configs/styles/form-color'),
    require('../../../configs/styles/form-btn-layout'))
  .withParts(
    cx.part.form
      .withId('form-container-part-6eHZEX')
      .withLabel('Form'))
  .withDropzones(
    cx.dropzone
      .withDropzone('form-container-dropzone-zsY6UI')
      .withAllowedElements(
        ...formElements,
        require('../multi-column'),
        ...contentElements,
        require('../../layout/col-one'),
        require('../../layout/col-two'),
        require('../../layout/col-three'),
        require('../../layout/col-four'),
        require('../../layout/spacer')),
    cx.dropzone
      .withDropzone('form-container-dropzone-btn-left-Q2L32x')
      .withAllowedElements(
        require('../../base/button')),
    cx.dropzone
      .withDropzone('form-container-dropzone-btn-right-uIS6Nj')
      .withAllowedElements(
        require('../../base/button')),
    cx.dropzone
      .withDropzone('form-container-dropzone-bottom-cJFI8U')
      .withAllowedElements(
        ...contentElements,
        require('../../layout/col-one'),
        require('../../layout/col-two'),
        require('../../layout/col-three'),
        require('../../layout/col-four'),
        require('../../layout/spacer')));