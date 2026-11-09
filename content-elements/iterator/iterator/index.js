require('./styles.scss');

const {cx, Icon} = require('@bsi-cx/design-build');
const {contentElements} = require('../../base');

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withFile(require('./template.twig'))
  .withElementId('iterator-Hn4sWq')
  /*.withLabel('Iterator Container')*/
  .withLabel('Iterator Container')
  /*.withDescription('Repeats the contained elements for each entry in a list')*/
  .withDescription('Wiederholt die enthaltenen Elemente für jeden Eintrag einer Liste')
  .withIcon(Icon.LIST)
  .withParts(
    cx.part.iterator
      .withId('iterator-part-Zc6yLb')
      .withLabel('Iterator'))
  .withDropzones(
    cx.dropzone
      .withDropzone('iterator-dropzone-Pk2mVe')
      .withAllowedElements(
        require('../../layout/col-one'),
        require('../../layout/col-two'),
        require('../../layout/col-three'),
        require('../../layout/col-four'),
        require('../../layout/spacer'),
        ...contentElements));
