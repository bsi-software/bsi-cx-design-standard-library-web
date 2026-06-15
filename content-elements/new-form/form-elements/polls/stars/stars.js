import Alpine from "@alpinejs/csp";

Alpine.data("starPoll", () => ({
    min: null,
    max: null,
    radioItems: null,

    /**
     * Initialize star poll by converting definition input into interactive radio options.
     *
     * @returns {void}
     */
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

    /**
     * Create and append one radio option for a star value.
     *
     * @param {number} value value represented by this star
     * @param {string} id id for the generated radio input
     * @param {string} name group name for the generated radio input
     * @param {boolean} required whether generated inputs should be required
     * @param {boolean} checked whether generated input should be preselected
     * @returns {void}
     */
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
                @after-change="formElementValidationOnChange"
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

    /**
     * Update selected star state, visual fill classes and rating label.
     *
     * @returns {void}
     */
    updateStatus() {
        // let radioItems = Array.from(this.$root.querySelectorAll("input[type=radio]"));
        let selectedIndex = Array.from(this.radioItems).findIndex(radio => radio.checked);
        this._setClassForAllStarsBefore(selectedIndex, "star-poll-radio-checked");
        this.$root.querySelector(".star-rating-fill-label").innerText = `${selectedIndex+1}/${this.max}`;
        this.$dispatch("after-change");
    },

    /**
     * Apply hover state to all stars up to the currently hovered star.
     *
     * @returns {void}
     */
    onHover() {
        // this.$el.parentElement.classList.add("star-poll-radio-hovered");
        let hoveredIndex = Array.from(this.radioItems).findIndex(radio => radio.parentElement == this.$el.parentElement);
        this._setClassForAllStarsBefore(hoveredIndex, "star-poll-radio-hovered");
    },

    /**
     * Remove hover state from all stars.
     *
     * @returns {void}
     */
    onStopHover() {
        this.radioItems.forEach((radio) => {
            radio.parentElement.classList.remove("star-poll-radio-hovered");
        });
    },

    /**
     * Toggle a CSS class on all stars up to the given index.
     *
     * @param {number} index last index that should be active
     * @param {string} className class name to toggle on star wrapper elements
     * @returns {void}
     */
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

