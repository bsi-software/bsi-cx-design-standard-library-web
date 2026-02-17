import { cx, Icon } from "@bsi-cx/design-build";

export default cx.contentElement
  .withElementId("bsi-grid-1814ad2b")
  .withLabel("Row")
  .withFile(import("./template.twig"))
  .withIcon(Icon.ONE_COLUMN)
  .withAddStyleConfigs(
    import("./configs/expandBackground"),
    import("./configs/backgroundColor"),
    import("./configs/gridTemplate"),
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("bsi-grid-dropzone-7da41088")
      .withAllowedElements(import("../column")),
  );
