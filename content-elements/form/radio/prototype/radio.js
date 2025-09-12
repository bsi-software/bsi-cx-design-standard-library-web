import Alpine from "@alpinejs/csp";

Alpine.data("formRadio", () => ({
  validateInput() {
    this.$root.querySelectorAll("input").forEach((radioButton) => {
      radioButton.setAttribute("aria-invalid", !this.$el.checkValidity());
    });

    // not required or required and valid
    if (this.$el.checkValidity()) {
      this.$root.querySelectorAll("input").forEach((radioButton) => {
        radioButton.removeAttribute("aria-describedby");
      });
    }
    // required and invalid
    else if ("ariaDescribedByElements" in Element.prototype) {
      radioButton.ariaDescribedByElements =
        this.$root.querySelector(".invalid-feedback");
    }
  },
}));
