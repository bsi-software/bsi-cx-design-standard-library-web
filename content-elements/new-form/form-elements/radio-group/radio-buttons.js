import Alpine from "@alpinejs/csp";

Alpine.data("radioButton", () => ({

  init() {
    
  },
  
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
