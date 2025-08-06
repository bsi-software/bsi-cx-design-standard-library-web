import Alpine from "@alpinejs/csp";

Alpine.data("toggleSwitch", () => ({

  checked: false,

  init() {
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
