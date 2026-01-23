const { TemplateElement, Icon, cx, bsiProperty, bsiLoremIpsum } = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
  .withElementId("bsi-headline-h1")
  .withLabel("Überschirft 1")
  .withFile(require("./template.hbs.twig"))
  .withIcon(Icon.HEADING)
  .withTemplateParts(
    cx.templatePart.PlainText("Überschrift", "headline-1-text").withTextPrefill({"value": cx.bsiLoremIpsum(3)}),
  )
;
