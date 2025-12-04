import Alpine from "@alpinejs/csp";

Alpine.data("selectField", () => ({
  rootElement: null,
  selectElement: null,

  initSelectField() {
    this.rootElement = this.$root;
    this.selectElement = this.$el;
    const selectedOption = this.selectElement.options[this.selectElement.selectedIndex].value;
    
    if (this.rootElement.classList.contains("bsi-placeholder-defined")) {
      if(selectedOption === this.selectElement.options[0].value) {
        this.selectElement.options[0].setAttribute("selected", "");
      }
      this.selectElement.options[0].setAttribute("value", "");
    }

  },

  onInputChanged() {
    this.$el.removeAttribute("aria-describedby");
    this.$el.setAttribute("aria-invalid", !this.selectElement.checkValidity());
  },
}))