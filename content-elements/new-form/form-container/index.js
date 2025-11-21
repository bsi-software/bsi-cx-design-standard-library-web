require("./styles.scss");
const { cx, Icon } = require("@bsi-cx/design-build");

const element = cx.contentElement;

/**
 * @returns {ContentElement}
 */
module.exports = element;
element
  .withFile(require("./template.twig"))
  .withElementId("form-container-84c6581f")
  /*.withLabel('Form')*/
  .withLabel("Neues Formular")
  .withIcon(Icon.ONE_COLUMN)
  .withStyleConfigs(
    require("../../../configs/styles/form-color-scheme.js"),
    require("../../../configs/styles/form-button-alignment.js"),

  )
  .withParts(
    cx.part.form
      .withId("form-container-part-06acb819")
      /*.withLabel('Form'))*/
      .withLabel("Formular Einstellungen")
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("form-container-dropdown-cd1f258c")
      .withAllowedElements(
        require("../form-section")
      ),
  );
