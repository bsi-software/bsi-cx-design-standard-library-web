import Alpine from "@alpinejs/csp";

Alpine.data("checkbox", () => ({
  validateCheckbox() {
    this.$el.setAttribute("aria-invalid", !this.$el.checkValidity());
    // not required or required and valid
    if (this.$el.checkValidity()) {
      this.$el.setAttribute("aria-describedby", `${this.$el.id}-info`);
    }
    // required and invalid
    else if ("ariaDescribedByElements" in Element.prototype) {
      this.$el.ariaDescribedByElements =
        this.$root.querySelectorAll(".invalid-feedback");
    }
  },
}));
