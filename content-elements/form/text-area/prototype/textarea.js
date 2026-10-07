import Alpine from "@alpinejs/csp";

Alpine.data("textareaField", () => ({
  rootElement: null,
  textareaElement: null,

  initTextarea() {
    this.rootElement = this.$root;
    this.textareaElement = this.$el;
  },

  onInputChanged() {
    if (this.textareaElement.checkValidity()) {
      this.textareaElement.setAttribute(
        "aria-describedby",
        `${this.textareaElement.id}-info`,
      );
    } else {
      this.textareaElement.removeAttribute("aria-describedby");
      this.textareaElement.setAttribute("aria-invalid", true);
    }
  },
}));
