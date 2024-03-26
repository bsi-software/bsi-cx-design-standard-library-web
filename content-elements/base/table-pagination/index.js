const {cx, Icon, ContentElement} = require('@bsi-cx/design-build');

/**
 * @type {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId('table-pagination-od2rhZ')
  .withIcon(Icon.TEXT)
/*.withLabel('Pagination')*/
  .withLabel('Seitennummerierung')
  .withHidden(true)
  .withFile(require('./template.hbs'));