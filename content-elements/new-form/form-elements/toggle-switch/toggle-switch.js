import Alpine from "@alpinejs/csp";

Alpine.data("toggleSwitch", () => ({

  isChecked: false,

  /**
   * Initialize toggle switch state from native checkbox.
   *
   * @returns {void}
   */
  init() {
    this.isChecked = this.$root.querySelector(".native-checkbox").checked;
  },
  
  /**
   * Toggle switch state via custom visual control and emit change event.
   *
   * @param {Event} event click event on visual toggle control
   * @returns {void}
   */
  toggle(event) {
    const visualToggleSwitch = event.target.closest(".visual-toggle-switch");
    if(!visualToggleSwitch) return;
    const input = visualToggleSwitch.parentElement.querySelector(".native-checkbox");
    if (input && !input.disabled) {
        input.checked = !input.checked;
        input.dispatchEvent(new Event("change", { bubbles: true }));
    }
  },

}));
