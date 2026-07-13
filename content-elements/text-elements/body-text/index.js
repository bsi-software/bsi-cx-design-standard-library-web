const {
  TemplateElement,
  Icon,
  cx,
  bsiProperty,
} = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
  .withElementId("bsi-body-text")
  .withLabel(bsiProperty("bodyText.label.element", "Text"))
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.TEXT)
  .withTemplateParts(
    cx.templatePart
      .FormattedText(
        bsiProperty("bodyText.label.text"),
        "body-text-OastHh",
        bsiProperty(
          "global.htmlEditor",
          require("../../../configs/editor/full"),
        ),
      )
      .withFormattedTextPrefill(
        bsiProperty("bodyText.prefill.text", "Lorem Impsum"),
      ),
  );
