import Alpine from "@alpinejs/csp";

Alpine.data("checkbox", () => ({
  tooltip: null,
  init() {
    const form = this.$root.querySelector("input").closest('.bsi-element-form-container-692qIu');
    this.tooltip = form.classList.contains('bsi-form-info-as-tooltip') ?  this.$refs.fieldTooltip : this.$refs.infoText;
    const inputId = this.$root.querySelector("input")?.id;
    this._setTooltipAccessibility(inputId);
  },
  _setTooltipAccessibility(inputId) {
    if (inputId) {
      this.tooltip.id = `${inputId}-tooltip`;
      this.$root
        .querySelector(`#${inputId}`)
        .setAttribute("aria-describedby", this.tooltip.id);
    }
  },
  validateCheckbox() {
    this.$el.setAttribute("aria-invalid", !this.$el.checkValidity());
    // not required or required and valid
    if (this.$el.checkValidity()) {
       this._setTooltipAccessibility(this.$el.id);
    }
    // required and invalid
    else if ("ariaDescribedByElements" in Element.prototype) {
      this.$el.ariaDescribedByElements =
        this.$root.querySelectorAll(".invalid-feedback");
    }
  },
}));
