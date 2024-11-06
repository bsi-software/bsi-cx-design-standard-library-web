import Alpine from "@alpinejs/csp";

Alpine.data("formPoll", () => ({
  root: null,
  labelElement: null,
  requiredErrorElement: null,

  initRadioGroup() {
    this.root = this.$root;
    let thisForm = this;
    let range = this.root.querySelector("input");
    if (range === null) {
      return;
    }

    let min = parseInt(range.getAttribute("min") || 1);
    let max = parseInt(range.getAttribute("max") || 10);
    let step = parseInt(range.getAttribute("step") || 1);

    range.setAttribute("class", "bsi-poll-number-input");

    let container = this.root.querySelector(".bsi-poll-radio-group");
    let name =
      "bsi-poll-radios-" + Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    if (this.root.classList.contains("bsi-poll-nps")) {
      for (let value = min; value <= max; value += step) {
        this._initRadioElement(range, value, container, thisForm, name, false);
      }
    } else if (this.root.classList.contains("bsi-poll-star")) {
      for (let value = min; value <= max; value += step) {
        this._initRadioElement(range, value, container, thisForm, name, true);
      }
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

    label.setAttribute('class', 'form-check-label bsi-poll-radio-label');
    label.setAttribute('for', id);
    label.setAttribute("tabindex", "0")
    label.setAttribute('data-value', value);
    label.innerHTML = value;

    const selectRadio = () => {
      if(radio.checked == true) {
        radio.checked = false;
      } else {
        radio.checked = true;
      }
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

  _initStarElement(range, value, container, thisForm) {
    this._initRadioElement(range, value, container, thisForm);
    let star = this.root.querySelector(`input[value='${value}']`);
    star.classList.add('bi', 'bi-star');
    star.addEventListener('mouseover', (e) => {
      this._highlightStars(value);
    })
    star.addEventListener('mouseout', (e) => {
      this._resetStars();
    })
    star.addEventListener('click', (e) => {
      this._setRating(value);
    })
  },

  _updateStatus(range, isStar) {
    let radioItems = this.root.querySelectorAll('input[type="radio"]');
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

    if (isStar && isFound > -1) {
      for (let i = 0; i < radioItems.length; i++) {
        let radio = radioItems[i];
        if (isFound >= i)
          radio.parentElement.classList.add("bsi-poll-radio-checked");
      }
    }
  },
}));
