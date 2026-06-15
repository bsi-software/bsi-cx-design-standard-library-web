import Alpine from "@alpinejs/csp";

Alpine.data("checkbox", () => ({

  /**
   * Initialize checkbox component.
   *
   * @returns {void}
   */
  init() {
    
  },
  
  /**
   * Toggle checkbox state via custom visual control and emit native events.
   *
   * @param {Event} event click event on visual checkbox control
   * @returns {void}
   */
  toggle(event) {
    const visualCheckbox = event.target.closest(".visual-checkbox");
    if(!visualCheckbox) return;
    const input = visualCheckbox.parentElement.querySelector(".native-checkbox");
    if (input && !input.disabled) {
        input.checked = !input.checked;
        input.dispatchEvent(new Event("change", { bubbles: true }));
        input.dispatchEvent(new Event("click", {bubbles: true }));
    }
  },

}));
