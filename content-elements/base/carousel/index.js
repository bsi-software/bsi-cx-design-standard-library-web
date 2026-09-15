const { cx, Icon } = require("@bsi-cx/design-build");
require('./styles.scss')
module.exports = cx.contentElement
  .withFile(require("./template.twig"))
  .withElementId("carousel-be15d5")
  .withLabel("Karussell")
  .withIcon(Icon.TEXT_WITH_IMAGE)
  .withDropzones(
    cx.dropzone
      .withDropzone("slide-dropzone-b0bf11")
      .withAllowedElements(
        require("../../layout/col-one"),
        require("../../layout/col-two")
      )
  )
  .withParts(
    cx.part.plainText
      .withLabel("Intervall")
      .withId("interval-id-23b7e7"),
    cx.part.plainText
      .withLabel("Aria-label")
      .withId("aria-label-id-e7ca88")
  );
