import Alpine from "@alpinejs/csp";

Alpine.data("checkbox", () => ({

  init() {
    
  },
  
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
