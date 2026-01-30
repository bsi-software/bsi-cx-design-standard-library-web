import Alpine from "@alpinejs/csp";

Alpine.data("starPoll", () => ({
    min: null,
    max: null,
    radioItems: null,

    initStar() {

        let definitionInput = this.$root.querySelector("input.number-input");
        if (definitionInput === null) {
            return;
        }

        this.min = parseInt(definitionInput.getAttribute("min") || 1);
        this.max = parseInt(definitionInput.getAttribute("max") || 10);
        let step = parseInt(definitionInput.getAttribute("step") || 1);
        let name = definitionInput.getAttribute("name");
        var id = definitionInput.getAttribute("id");
        var required = definitionInput.hasAttribute('required');
        definitionInput.remove();

        for (let value = this.min; value <= this.max; value += step) {
            var checked = value == definitionInput.getAttribute('value');
            this._initRadioElement(value, `${id}-${value}`, name, required, checked);
        }
        
        this.$root.querySelector(".star-rating-fill-label").innerText = `0/${this.max}`;
        this.radioItems = this.$root.querySelectorAll("input[type=radio]");
    },

    _initRadioElement(value, id, name, required, checked) {
        let div = document.createElement("div");
        div.setAttribute("class", "star-item");
        var radioHTML = `
            <input 
                type="radio" 
                class="native-star-input native-input" 
                value="${value}" 
                id="${id}" 
                name="${name}"
                @change="updateStatus"
                ${required ? "required" : ""} 
                ${checked ? "checked" : ""}
            >
        `;
        var spanHTML = `
            <label 
                for="${id}"
                class="visual-star-input"
                @mouseenter="onHover"
                @mouseleave="onStopHover"
            >
            </label>
        `;

        div.innerHTML = radioHTML + spanHTML;
        this.$el.appendChild(div);
    },

    updateStatus() {
        // let radioItems = Array.from(this.$root.querySelectorAll("input[type=radio]"));
        let selectedIndex = Array.from(this.radioItems).findIndex(radio => radio.checked);
        this._setClassForAllStarsBefore(selectedIndex, "star-poll-radio-checked");
        this.$root.querySelector(".star-rating-fill-label").innerText = `${selectedIndex+1}/${this.max}`;
    },

    onHover() {
        // this.$el.parentElement.classList.add("star-poll-radio-hovered");
        let hoveredIndex = Array.from(this.radioItems).findIndex(radio => radio.parentElement == this.$el.parentElement);
        this._setClassForAllStarsBefore(hoveredIndex, "star-poll-radio-hovered");
    },

    onStopHover() {
        this.radioItems.forEach((radio) => {
            radio.parentElement.classList.remove("star-poll-radio-hovered");
        });
    },

    _setClassForAllStarsBefore(index, className) {
        this.radioItems.forEach((radio, i) => {
            let parentClassList = radio.parentElement.classList;
            let isActive = i <= index;
            if (isActive) {
                parentClassList.add(className);
            } else {
                parentClassList.remove(className);
            }
        });
    }


}));

