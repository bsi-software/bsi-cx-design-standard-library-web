require('./styles.scss');

const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @returns {ContentElement}
 */
module.exports = cx.contentElement
  .withFile(require('./template.twig'))
  .withElementId('product-iterator-Qm7RtZ')
  /*.withLabel('Product Iterator')*/
  .withLabel('Produkt Iterator')
  .withIcon(Icon.TEXT_WITH_IMAGE)
  .withParts(
    cx.part.iterator
      .withId('product-iterator-part-Vh3kXp')
      .withLabel('Iterator'))
  .withDropzones(
    cx.dropzone
      .withDropzone('product-iterator-dropzone-image-L8wNcd')
      .withAllowedElements(
        require('../../base/figure')),
    cx.dropzone
      .withDropzone('product-iterator-dropzone-content-T2pGfa')
      .withAllowedElements(
        require('../../base/h1'),
        require('../../base/h2'),
        require('../../base/h3'),
        require('../../base/h4'),
        require('../../base/h5'),
        require('../../base/h6'),
        require('../../base/text'),
        require('../../base/button')));
