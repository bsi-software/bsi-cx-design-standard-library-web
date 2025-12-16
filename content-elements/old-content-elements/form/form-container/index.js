require('./styles.scss');
const { cx, Icon } = require('@bsi-cx/design-build');
const { contentElements } = require('../../base');
const { formElements } = require('../index');

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element.withFile(require('./template.twig'))
  .withElementId(`form-container-692qIu`)
  /*.withLabel('Form')*/
  .withLabel('Formular')
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(
    require('../form-width'),
    require('../form-layout'),
    require('../../../../configs/styles/old-elements-styles/border-radius'),
    require('../form-color'),
    require('./form-btn-layout'),
    require('./form-label'),
    require('./form-info-text'),
    require('./form-validation-summary'))
  .withParts(
    cx.part.form
      .withId('form-container-part-6eHZEX')
      /*.withLabel('Form'))*/
      .withLabel('Formular'))
  .withDropzones(
    cx.dropzone
      .withDropzone('form-container-dropzone-zsY6UI')
      .withAllowedElements(
        ...formElements,
        require('../if-then/if-layout'),
        require('../if-then/then-group'),
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
        require('../../layout/spacer')))
  .withArchived(true);