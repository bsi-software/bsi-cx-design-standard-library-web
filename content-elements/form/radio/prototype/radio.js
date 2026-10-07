import Alpine from "@alpinejs/csp";

Alpine.data("formRadio", () => ({
  validateInput() {
    const isValid = this.$el.checkValidity();

    this.$root.querySelectorAll("input").forEach((radioButton) => {
      radioButton.setAttribute("aria-invalid", String(!isValid));

      if ("ariaDescribedByElements" in Element.prototype) {
        // not required or required and valid
        if (isValid) {
          const form = this.$root
            .querySelector("input")
            .closest(".bsi-element-form-container-692qIu");

          this.tooltip = form.classList.contains("bsi-form-info-as-tooltip")
            ? this.$root.fieldTooltip
            : this.$refs.infoText;

          radioButton.ariaDescribedByElements = this.tooltip
            ? [this.tooltip]
            : [];
        }
        // required and invalid
        else {
          const errorMessage = this.$root.querySelector(".invalid-feedback");

          radioButton.ariaDescribedByElements = errorMessage
            ? [errorMessage]
            : [];
        }
      }
    });
  },
}));