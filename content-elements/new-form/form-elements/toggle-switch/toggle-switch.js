import Alpine from "@alpinejs/csp";

Alpine.data("toggleSwitch", () => ({

  isChecked: false,

  init() {
    this.isChecked = this.$root.querySelector(".native-checkbox").checked;
  },
  
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
