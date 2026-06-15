import Alpine from "@alpinejs/csp";

Alpine.data("radioButton", () => ({

  /**
   * Initialize radio button component.
   *
   * @returns {void}
   */
  init() {
    
  },
  
  /**
   * Select radio input via custom visual control and emit change event.
   *
   * @param {Event} event click event on visual radio control
   * @returns {void}
   */
  toggle(event) {
    const visualRadio = event.target.closest(".visual-radio");
    if(!visualRadio) return;
    const input = visualRadio.parentElement.querySelector(".native-radio");
    if (input && !input.disabled) {
        input.checked = true;
        input.dispatchEvent(new Event("change", { bubbles: true }));
    }
  },

}));
