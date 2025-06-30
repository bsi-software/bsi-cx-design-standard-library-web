require("./styles.scss");
const { cx, Icon } = require("@bsi-cx/design-build");

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element
  .withFile(require("./template.twig"))
  .withElementId("form-section-4cc6cfe4")
  /*.withLabel('Form')*/
  .withLabel("Formuar Sektion")
  .withIcon(Icon.ONE_COLUMN)
  .withDropzones(
    cx.dropzone
      .withDropzone("form-section-dropzone-a1788622")
    //   .withAllowedElements(
    //     require("../")
    //   ),
  );
