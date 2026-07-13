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
  .withElementId("bsi-headline-h1")
  .withLabel(bsiProperty("headline.labels.element"))
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.HEADING)
  .withTemplateParts(
    cx.templatePart
      .PlainText(bsiProperty("headline.labels.heading"), "headline-1-text")
      .withTextPrefill({ value: bsiProperty("headline.prefill.heading") }),
  );
