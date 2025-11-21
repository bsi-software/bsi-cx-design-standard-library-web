import Alpine from "@alpinejs/csp";

Alpine.data("toggleSwitch", () => ({

  checked: false,
  toggleId: '',
  labelId: '',

  init() {
    this.toggleId = this.$id('toggle');
    this.labelId = this.$id('toggle-label');
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
