import Alpine from "@alpinejs/csp";

Alpine.data("formRadio", () => ({
  validateInput() {
    this.$root.querySelectorAll("input").forEach((radioButton) => {
      radioButton.setAttribute("aria-invalid", !this.$el.checkValidity());
    });

    // not required or required and valid
    if (this.$el.checkValidity()) {
      const form = this.$root.querySelector('input').closest('.bsi-element-form-container-692qIu');
      this.tooltip = form.classList.contains('bsi-form-info-as-tooltip') ?  this.$root.fieldTooltip : this.$refs.infoText;
      this.$root.querySelectorAll("input").forEach((radioButton) => {
        radioButton.ariaDescribedByElements = this.tooltip
      });
    }
    // required and invalid
    else if ("ariaDescribedByElements" in Element.prototype) {
      radioButton.ariaDescribedByElements =
        this.$root.querySelector(".invalid-feedback");
    }
  },
}));
