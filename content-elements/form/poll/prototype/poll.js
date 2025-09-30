import Alpine from "@alpinejs/csp";

// TODO: mehrsprachig
const starLabels = [
  'kein Stern',
  'ein Stern',
  'zwei Sterne',
  'drei Sterne',
  'vier Sterne',
  'fünf Sterne',
  'sechs Sterne',
  'sieben Sterne',
  'acht Sterne',
  'neun Sterne',
  'zehn Sterne',
]

Alpine.data("formPoll", () => ({
  root: null,
  labelElement: null,
  requiredErrorElement: null,
  isStar: false,

  initRadioGroup() {
    this.root = this.$root;
    let label = this.$root.querySelector('label');
    let legend = document.createElement('legend');
    legend.setAttribute("class", "form-label");
    legend.innerText = label.innerText;
    this.$el.appendChild(legend);
    label.remove();

    let infoText = this.$root.querySelector('.form-text');
    if (infoText.innerText) {
      this.$el.appendChild(infoText);
    }

    let definitionInput = this.root.querySelector("input.bsi-poll-number-input");
    if (definitionInput === null) {
      return;
    }

    let min = parseInt(definitionInput.getAttribute("min") || 1);
    let max = parseInt(definitionInput.getAttribute("max") || 10);
    let name = definitionInput.getAttribute("name");
    var id = definitionInput.getAttribute("id");
    var required = definitionInput.hasAttribute('required');
    definitionInput.remove();

    this.isStar = this.root.classList.contains("bsi-poll-star");
    for (let value = min; value <= max; value += 1) {
      var checked = value == definitionInput.getAttribute('value');
      this._initRadioElement(value, `${id}-${value}`, name, required, checked);
    }

    this.updateStatus();
  },

  initRequiredError() {
    this.requiredErrorElement = this.$el;
  },

  _initRadioElement(value, id, name, required, checked) {
    let div = document.createElement("div");
    div.className = "poll-check";
    var radioHTML = `<input type="radio" 
      class="form-check-input bsi-poll-radio-input" 
      value="${value}" 
      id="${id}" 
      name="${name}"
      ${this.isStar ? '@change="updateStatus"' : ''}
      ${required ? "required" : ""} 
      ${checked ? "checked" : ""}>`;
    var labelHTML = this.isStar ?
      `<label for="${id}" class="form-check-label bsi-poll-radio-label" aria-label="${starLabels[value]}">
      <i class="bi bi-star"></i><i class="bi bi-star-fill"></i></label>`:
      `<label for="${id}" class="form-check-label bsi-poll-radio-label">${value}</label>`;

    div.innerHTML = radioHTML + labelHTML;
    this.$el.appendChild(div);
  },

  // TODO: solve by style?
  updateStatus() {
    let radioItems = Array.from(this.root.querySelectorAll("input[type=radio]"));
    let selectedIndex = radioItems.findIndex(radio => radio.checked);
    radioItems.forEach((radio, i) => {
      let parentClassList = radio.parentElement.classList;
      let isActive = this.isStar ? i <= selectedIndex : i === selectedIndex;
      if (isActive) {
        parentClassList.add("bsi-poll-radio-checked");
      } else {
        parentClassList.remove("bsi-poll-radio-checked");
      }
    });
  },
}));
