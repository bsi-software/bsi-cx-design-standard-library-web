import Alpine from "@alpinejs/csp";

Alpine.data("form", () => ({
    form: null,
    formErrorValueMissingText: null,
    formErrorTypeMissmatchText: null,
    formOtherError: null,
    
    init() {
        this.form = this.$root;
        this.formErrorValueMissingText = this.$root.querySelector(".form-value-missing-error-text");
        this.formErrorTypeMissmatchText = this.$root.querySelector(".form-type-missmatch-error-text");
        this.formOtherError = this.$root.querySelector(".form-other-error-text"); 
    },
    
    submitForm(event) {
        this.form.classList.add('form-was-validated');
        if (!this._formValidation()) {
            event.preventDefault();
        }
    },

    /**
     * validate an element after input, if form was validated yet
     * 
     * @param {InputEvent} event for every input
     */
    formElementValidationOnInput(event) {
        if (this.form.classList.contains(".form-was-validated") || event.target.value === "") {
            this._formElementValidation(event.target);
        }
    },

    /**
     * validate an element after change, if form was not validated yet
     * 
     * @param {Event} event for every change
     */
    formElementValidationOnChange(event) {
        if (!this.form.classList.contains(".form-was-validated")) {
            this._formElementValidation(event.target);
        }
    },

    /**
     * Validate the whole form
     *
     * @returns {boolean} true if valid, false if invalid
     */
    _formValidation() {
        console.log("SubmitForm wurde aufgerufen");
        const formElementInputs = this.$root.querySelectorAll(".form-element input"); // TODO: ggf erweitern, sodass auch Form Elemente die kein input Feld als Grundlage haben funktionieren
        let formIsValid = true;

        formElementInputs.forEach(formElementInput => {
            console.log("FormularElementId: " + formElementInput.id);
            if (!formElementInput.checkValidity()) {
                console.debug("Das Formularelement ist nicht valide.");
                this._setCustomInValidClass(formElementInput);
                formIsValid = false;
                this._createErrorMessage(formElementInput);
            } else {
                console.debug("Das Formularelement ist valide.");
                this._setCustomValidClass(formElementInput);
            }
        });
        return formIsValid;
    },

    /**
     * validate the element
     * @param {Element} element to validate
     */
    _formElementValidation(element) {
        console.log("Das Formularelement ist valide");
        this._setCustomValidClass(element);
        if (!element.checkValidity()) {
            console.debug("Das Formularelement ist nicht valide.");
            this._setCustomInValidClass(element);
            this._createErrorMessage(element);
        }
    },

    /**
     * Create an error message for an input Element
     * 
     * @param {Element} inputElement that have a related error message Element
     */
    _createErrorMessage(inputElement) {
        const errorMessageElement = inputElement.closest(".form-element").querySelector(".bsi-invalid-feedback");
        
        const validity = inputElement.validity;

        if (validity.valueMissing) {
            console.debug("Das Formularelement ist nicht ausgefüllt. Fehlertext: " + this.formErrorValueMissingText.textContent);
            errorMessageElement.textContent = this.formErrorValueMissingText.textContent;
        }
        else if (validity.typeMismatch) {
            console.debug("Das Formularelement ist mit dem Falschen Typ ausgefüllt. Fehlertext: " + this.formErrorTypeMissmatchText.textContent);
            errorMessageElement.textContent = this.formErrorTypeMissmatchText.textContent;
        }
        else if (validity.patternMismatch) {
            console.debug("Das Formularelement hat das falsche pattern. Fehlertext: " + inputElement.textContent);
            errorMessageElement.textContent = inputElement.textContent;
        }
        else {
            console.debug("Das Formularelement ist nicht korrekt ausgefüllt. Fehlertext: " + this.formOtherError.textContent);
            errorMessageElement.textContent = this.formOtherError.textContent;
        }
    },

    /**
     * change a class name from an element from the oldClassName to the newClassName.
     * 
     * @param {*} element on which the class is to be changed
     * @param {*} oldClassName old class name that should be change
     * @param {*} newClassName ne class name
     */
    _toggleClass(element, oldClassName, newClassName) {
        element.classList.remove(oldClassName);
        element.classList.add(newClassName);
    },

    _setCustomValidClass(...elements) {
        elements.forEach(element => {
            if (element.type === "checkbox") {
                this._toggleClass(element, "custom-invalid", "custom-valid");
            }
        });
        
    },

    _setCustomInValidClass(...elements) {
        elements.forEach(element => {
            if (element.type === "checkbox") {
                this._toggleClass(element, "custom-valid", "custom-invalid");
            }
        });
    },

}));
