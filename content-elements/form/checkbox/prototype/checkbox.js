import Alpine from "@alpinejs/csp";

Alpine.data("checkbox", () => ({
  init() {},

  validateCheckbox() {
    if (this.$el.hasAttribute("required")) {

      this.$el.setAttribute("aria-invalid", !this.$el.checked);

      if (this.$el.checkValidity()) {

        this.$el.removeAttribute("aria-describedby");

      } else if ("ariaDescribedByElements" in Element.prototype) {

        var errorMessageElements = Array.from(
          this.$el
            .closest(".bsi-form-element")
            .querySelectorAll(".invalid-feedback")
        ).filter(
          (errorMessageElement) =>
            window.getComputedStyle(errorMessageElement).display !== "none"
        );
        this.$el.ariaDescribedByElements = errorMessageElements;
      }

    } else {
        this.$el.removeAttribute("aria-invalid");
    }
  },
}));
