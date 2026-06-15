import Alpine from "@alpinejs/csp";

Alpine.data("selectInputField", () => ({
  selectElement: null,
  placeholder: "",

  /**
   * Initialize select field state and apply placeholder fallback behavior.
   *
   * @returns {void}
   */
  initSelectInputField() {
    this.selectElement = this.$el;
    this.placeholder = this.$root.querySelector(".placeholder").innerHTML;

    if (this.placeholder != "") {
      this.selectElement.prepend(new Option(this.placeholder, this.placeholder));
      if (!this.selectElement.querySelector("[selected]")) {
        // Set placeholder as default value, if no other option is selected
        this.selectElement.selectedIndex = 0;
        if (this.selectElement.required) {
          // If the select is required, set the placeholder as invalid option
          this.selectElement.classList.add("custom-invalid");
          this.selectElement.setCustomValidity("placeholder is selected");
        }
      }
    }
  },

  /**
   * Handle selection changes and maintain custom validity for placeholder selection.
   *
   * @param {Event} event native change event from select field
   * @returns {void}
   */
  onChangeSelection(event) {
    if (this.selectElement.selectedIndex == 0 && this.selectElement.required) {
      // If the placeholder is selected and the select is required, set the placeholder as invalid option
      this.selectElement.classList.add("custom-invalid");
      this.selectElement.setCustomValidity("placeholder is selected");
    } else {
      // If the placeholder is not selected, remove the invalid state
      this.selectElement.classList.remove("custom-invalid");
      this.selectElement.setCustomValidity("");
    }
    this.$dispatch('after-change', event);
  },
}))