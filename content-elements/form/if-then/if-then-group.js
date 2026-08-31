import Alpine from "@alpinejs/csp";

Alpine.data("ifThenGroup", () => ({
  dependingObj: [],
  conditionInputs: null,
  ifInputType: "",
  root: "",
  init() {
    this.root = this.$root;

    this._initDependingGroups();
    this._initConditionInputs();
    this._registerConditionListeners();
    this._setAriaControls();
    this._handlePrefilledConditions();
  },

  _initDependingGroups() {
    const dependingGroups = Array.from(
      this.$root.querySelectorAll(":scope > .then-container > .then-group"),
    );

    this.dependingObj = dependingGroups.map((dependingGroupNode) => ({
      groupNode: dependingGroupNode,
      visibleIf: dependingGroupNode
        .querySelector(".condition")
        .innerText.split(";")
        .map((val) => val.trim())
        .filter(Boolean),
      childInputs: Array.from(
        dependingGroupNode.querySelectorAll("input, select, textarea"),
      ),
      childsRequired: dependingGroupNode.classList.contains(
        "required-if-visible",
      ),
    }));
  },

  _initConditionInputs() {
    this.conditionInputs = Array.from(
      this.$root.querySelectorAll(
        ":scope > .if-container select, :scope > .if-container input",
      ),
    );

    const firstInput = this.conditionInputs.at(0);

    if (!firstInput) {
      this.ifInputType = null;
      return;
    }

    this.ifInputType =
      firstInput.tagName === "SELECT" ? "select" : firstInput.type;
  },

  _registerConditionListeners() {
    this.conditionInputs.forEach((input) => {
      input.setAttribute("x-on:change", "toggleDependingGroups");
    });
  },

  _setAriaControls() {
    if (this.conditionInputs.length === 1) {
      this._setAriaControlsForSingleConditionInput();
      return;
    }

    this._setAriaControlsForMultipleConditionInputs();
  },

  _setAriaControlsForSingleConditionInput() {
    const controlIds = Array.from(
      this.$root.querySelectorAll(
        ".then-container input, .then-container select",
      ),
    )
      .map((input) => input.id)
      .join(" ");

    this.conditionInputs.at(0).setAttribute("aria-controls", controlIds);
  },

  _setAriaControlsForMultipleConditionInputs() {
    this.conditionInputs.forEach((radioInput) => {
      const controlIds = this.dependingObj
        .filter((group) => group.visibleIf.includes(radioInput.value))
        .flatMap((group) => group.childInputs.map((input) => input.id))
        .join(" ");

      radioInput.setAttribute("aria-controls", controlIds);
    });
  },

  _handlePrefilledConditions() {
    this.conditionInputs
      .filter((input) => this.ifInputType !== "radio" || input.checked)
      .forEach((input) => {
        this._showDependingGroupsOf(input);
      });
  },
  toggleDependingGroups() {
    this._showDependingGroupsOf(this.$el);
    this.disableAllInputsHidden();
  },
  disableAllInputsHidden() {
    let hiddenInputs = this.root.querySelectorAll(
      ".then-group[aria-hidden='true']",
    );
    hiddenInputs.forEach((div) => {
      div.querySelectorAll("input,select").forEach((input) => {
        input.removeAttribute("required");
        if (input.type == "checkbox" || input.type == "radio") {
          input.checked = false;
          input.dispatchEvent(new Event("change"));
        } else if (input.tagName == "select") {
          input.selectedIndex = 0;
          input.dispatchEvent(new Event("change"));
        } else {
          input.value = "";
        }
      });
    });
  },
  _showDependingGroupsOf(checkedEl) {
    // BFSG: set aria-expanded
    this.conditionInputs.forEach((condition) =>
      condition.setAttribute("aria-expanded", condition === checkedEl),
    );
    let value =
      this.ifInputType === "checkbox"
        ? String(checkedEl.checked)
        : checkedEl.value;
    // show active depending
    this.dependingObj.forEach((dependingObj) => {
      let isVisible = dependingObj.visibleIf.includes(value);
      isVisible
        ? dependingObj.groupNode.removeAttribute("aria-hidden")
        : dependingObj.groupNode.setAttribute("aria-hidden", true);
      dependingObj.childInputs.forEach((input) =>
        isVisible && dependingObj.childsRequired
          ? this.addRequired(input)
          : this.removeRequired(input),
      );
    });
  },
  removeRequired(input) {
    if (input.classList.contains("flatpickr-input")) {
      input.nextElementSibling?.removeAttribute("required");
    }
    input.removeAttribute("required");
  },
  addRequired(input) {
    if (input.classList.contains("flatpickr-input")) {
      input.nextElementSibling?.setAttribute("required", "required");
    }
    input.setAttribute("required", "required");
  },
}));
