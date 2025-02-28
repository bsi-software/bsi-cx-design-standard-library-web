import Alpine from "@alpinejs/csp";

Alpine.data("formPoll", () => ({
  root: null,
  labelElement: null,
  requiredErrorElement: null,

  initRadioGroup() {
    this.root = this.$root;
    let thisForm = this;
    let range = this.root.querySelector("input.bsi-poll-number-input");
    if (range === null) {
      return;
    }

    let min = parseInt(range.getAttribute("min") || 1);
    let max = parseInt(range.getAttribute("max") || 10);
    let step = parseInt(range.getAttribute("step") || 1);
    let name = range.getAttribute("name");
    range.remove();

    range.setAttribute("class", "bsi-poll-number-input");

    let container = this.root.querySelector(".bsi-poll-radio-group");
    var isStar = this.root.classList.contains("bsi-poll-star");
    for (let value = min; value <= max; value += step) {
      this._initRadioElement(range, value, container, thisForm, name, isStar);
    }

    range.form.addEventListener("reset", function () {
      window.setTimeout(function () {
        thisForm._updateStatus(range);
      });
    });

    this._updateStatus(range);
  },

  initRequiredError() {
    this.requiredErrorElement = this.$el;
  },

  _initRadioElement(range, value, container, thisForm, name, isStar) {
    let div = document.createElement("div");
    let radio = document.createElement("input");
    let label = document.createElement("label");
    let id = range.getAttribute("id") + "-" + value;

    div.setAttribute(
      "class",
      "form-check form-check-inline radio-group bsi-poll-radio-item"
    );

    if(isStar) {
      div.setAttribute(
        "tabindex",
        "0"
      );
    }
    radio.setAttribute("class", "form-check-input bsi-poll-radio-input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("value", value);
    if(!isStar){
      radio.setAttribute("tabindex", "0");
    } else {
      radio.setAttribute("tabindex", "-1")
    }
    radio.setAttribute("id", id);
    radio.setAttribute("name", name);
    if (range.hasAttribute("required")) {
      radio.required = true;
    }
    radio.checked = value == range.value;

    label.setAttribute("class", "form-check-label bsi-poll-radio-label");
    label.setAttribute("for", id);
    label.setAttribute("tabindex", "0")
    label.setAttribute("data-value", value);
    label.innerHTML = value;

    const selectRadio = () => {
      radio.checked = !radio.checked;
    };

    if(isStar) {
      div.addEventListener("click", selectRadio);
      div.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            selectRadio();
            range.value = label.getAttribute("data-value");
            thisForm._updateStatus(range, isStar);
        }
      });
      div.addEventListener("click", (e) => {
        selectRadio();
        range.value = label.getAttribute("data-value");
        thisForm._updateStatus(range, isStar);
      });
    }
    label.addEventListener("click", (e) => {
      selectRadio();
      range.value = label.getAttribute("data-value");
      thisForm._updateStatus(range, isStar);
    });
    label.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        selectRadio();
        range.value = label.getAttribute("data-value");
        thisForm._updateStatus(range, isStar);
      }
    });

    radio.addEventListener("change", function () {
      range.value = label.getAttribute("data-value");
      thisForm._updateStatus(range, isStar);
    });

    div.appendChild(radio);
    div.appendChild(label);
    container.appendChild(div);
  },

  _updateStatus(range, isStar) {
    let radioItems = this.root.querySelectorAll("input[type=radio]");
    let isFound = -1;
    for (let i = 0; i < radioItems.length; i++) {
      let radio = radioItems[i];
      radio.checked = range.value === radio.value;
      if (radio.checked === true) {
        radio.parentElement.classList.add("bsi-poll-radio-checked");
        isFound = i;
      } else {
        radio.parentElement.classList.remove("bsi-poll-radio-checked");
      }
    }

    if (isStar) {
      Array.from(radioItems)
        .filter((v, i) => isFound >= i)
        .forEach(radio => {
          radio.parentElement.classList.add("bsi-poll-radio-checked");
        })
    }
  },
}));
