import cx from "@bsi-cx/design-build";

const buttonElements = [import("./button-filled")];
const buttonGroup = cx.contentElementGroup
  .withGroupId("button-elements-kX7dif")
  .withLabel("Button Elemente")
  .withContentElements(...buttonElements);

export { buttonElements, buttonGroup };
