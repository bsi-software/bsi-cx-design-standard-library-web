import { cx, Icon } from "@bsi-cx/design-build";

export default cx.contentElement
  .withElementId("bsi-grid-column-7972a004")
  .withLabel("Spalte (Grid)")
  .withFile(import("./template.twig"))
  .withIcon(Icon.ONE_COLUMN)
  .withAddStyleConfigs(
    import("./configs/backgroundColor"),
    import("./configs/roundedCorners"),
    import("./configs/verticalAlignment"),
    import("./configs/horizontalAlignment"),
  )
  .withDropzones(cx.dropzone.withDropzone("bsi-grid-column-dropzone-57ce4d08"));
