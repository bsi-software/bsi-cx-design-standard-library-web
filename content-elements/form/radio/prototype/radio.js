import Alpine from "@alpinejs/csp";

Alpine.data("formRadio", () => ({
  validateInput() {
    console.log("Test");
    let valid = this.$el.checkValidity();
    this.$root.querySelector(".invalid-feedback").style.display = valid
      ? "none"
      : "block";

    if (this.$root.classList.contains("required")) {
      this.$root.querySelectorAll("input").forEach((radioButton) => {
        radioButton.setAttribute("aria-invalid", !this.$el.checked);
      });

      var errorMessageElements = Array.from(
        this.$el
          .closest(".bsi-form-element")
          .querySelectorAll(".invalid-feedback")
      ).filter(
        (errorMessageElement) =>
          window.getComputedStyle(errorMessageElement).display !== "none"
      );

      this.$root.querySelectorAll("input").forEach((radioButton) => {
        if (radioButton.checkValidity()) {
          radioButton.removeAttribute("aria-describedby");
        } else if ("ariaDescribedByElements" in Element.prototype) {
          radioButton.ariaDescribedByElements = errorMessageElements;
        }
      });
    } else {
      this.$root.querySelectorAll("input").forEach((radioButton) => {
        radioButton.removeAttribute("aria-invalid");
      });
    }
  },
}));
