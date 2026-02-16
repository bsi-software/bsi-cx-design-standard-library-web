import Alpine from "@alpinejs/csp";

Alpine.data("selectInputField", () => ({
  selectElement: null,
  placeholder: "",

  initSelectInputField() {
    this.selectElement = this.$el;
    this.placeholder = this.$root.querySelector(".placeholder").innerHTML;

    if (this.placeholder != "") {
      this.selectElement.prepend(new Option(this.placeholder, this.placeholder));
      if (!this.selectElement.querySelector("[selected]")) {
        this.selectElement.selectedIndex = 0;
        this.selectElement.classList.add("custom-invalid");
        this.selectElement.setCustomValidity("placeholder is selected");
      }
    }
  },

  // TDOD: Das ist noch nicht fertig, hier bin ich gerade dran...
  onChangeSelection(event) {
    console.log("select.js: onChangeSelection")
    if (this.selectElement.selectedIndex == 0) {
      this.selectElement.classList.add("custom-invalid");
      this.selectElement.setCustomValidity("placeholder is selected");
    } else {
      this.selectElement.classList.remove("custom-invalid");
      this.selectElement.setCustomValidity("");
    }
    this.$dispatch('after-change', event);
  },
}))