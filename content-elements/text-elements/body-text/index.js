const { TemplateElement, Icon, cx, bsiProperty } = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
  .withElementId("bsi-body-text-IxsKOQ")
  .withLabel(bsiProperty("bodyText.label", "Text"))
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.TEXT)
  .withTemplateParts(
    cx.templatePart.FormattedText("Text", "body-text-OastHh", require("./editor-config.js")).withFormattedTextPrefill("<div>" + bsiProperty("bodyText.prefillText", "Lorem Impsum") + "</div>"),
  )
;
