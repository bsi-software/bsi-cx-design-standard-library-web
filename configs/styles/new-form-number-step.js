const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
  .withIdentifier("new-form-number-step-kLIsJZ")
  .withLabel("Step Wert")
  .withStyleOptions(
    cx.styleOption
      .withLabel("1")
      .withDomManipulations(
        cx.domManipulation
          .withSelector("number-input")
          .withAttribute("step")
          .withValue("1"),
      ),
    cx.styleOption
      .withLabel("0.1")
      .withDomManipulations(
        cx.domManipulation
          .withSelector("number-input")
          .withAttribute("step")
          .withValue("0.1"),
      ),
    cx.styleOption
      .withLabel("0.01")
      .withDomManipulations(
        cx.domManipulation
          .withSelector("number-input")
          .withAttribute("step")
          .withValue("0.01"),
      ),
    cx.styleOption
      .withLabel("0.001")
      .withDomManipulations(
        cx.domManipulation
          .withSelector("number-input")
          .withAttribute("step")
          .withValue("0.001"),
      ),
  );
