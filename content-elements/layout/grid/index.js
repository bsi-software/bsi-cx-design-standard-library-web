require("./styles.scss");

const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("bsi-grid-1814ad2b")
  .withLabel("Row")
  .withFile(require("./template.twig"))
  .withIcon(Icon.ONE_COLUMN)
  .withAddStyleConfigs(
    require("./gap"),
    require("./expandBackground"),
    require("./backgroundColor"),
  )
  .withDropzones(
    cx.dropzone
    .withDropzone("bsi-grid-dropzone-7da41088")
    .withAllowedElements(
      require("../column"),
    )
  );