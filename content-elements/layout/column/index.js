require("./styles.scss");

const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("bsi-grid-column-7972a004")
  .withLabel("Spalte (Grid)")
  .withFile(require("./template.twig"))
  .withIcon(Icon.ONE_COLUMN)
  .withAddStyleConfigs(
    require("./configs/backgroundColor"),
    require("./configs/roundedCorners"),
    require("./configs/verticalAlignment"),
    require("./configs/horizontalAlignment"),
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("bsi-grid-column-dropzone-57ce4d08")
  );
