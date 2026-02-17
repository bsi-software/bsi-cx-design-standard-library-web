import cx from "@bsi-cx/design-build";

const layoutElements = [
  import("./grid"),
  import("./column"),
  import("./template-parts/grid"),
  import("./template-parts/column"),
];
const layoutGroup = cx.contentElementGroup
  .withGroupId("layout-elements-1f3c625c")
  .withLabel("Layout Elemente")
  .withContentElements(...layoutElements);

export { layoutElements, layoutGroup };
