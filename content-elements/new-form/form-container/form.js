import Alpine from "@alpinejs/csp";

Alpine.data("form", () => ({
    form: null,
    formErrorValueMissingText: null,
    formErrorTypeMissmatchText: null,
    formOtherError: null,
    inputErrorMessages: [],
    errorMessageMap: null,
    
    init() {
        this.form = this.$root;
        this.formErrorValueMissingText = this.$root.querySelector(".form-value-missing-error-text");
        this.formErrorTypeMissmatchText = this.$root.querySelector(".form-type-missmatch-error-text");
        this.formOtherError = this.$root.querySelector(".form-other-error-text");

        // save all invalid-feedback error messages with id from element
        this.form.querySelectorAll(".form-element input").forEach(inputElement => {
            console.log("ID: " + inputElement.id);
            console.log("ErrorMessage: " + inputElement.closest(".form-element").querySelector(".bsi-invalid-feedback").textContent.trim());
            this.inputErrorMessages.push( {
                id: inputElement.id,
                errorMessage: inputElement.closest(".form-element").querySelector(".bsi-invalid-feedback").textContent.trim()
            })
        });

        // create a map of inputErrorMessages
        this.errorMessageMap = Object.fromEntries(
            this.inputErrorMessages.map(entry => [entry.id, entry.errorMessage])
        );
    },
    
    /**
     * Funktion that calles, if the formular is submited
     * 
     * @param {*} event submit event
     */
    submitForm(event) {
        this.form.classList.add('form-was-validated');
        if (!this._formValidation()) {
            event.preventDefault();
        }
    },

    /**
     * validate an element after leaf it
     * 
     * @param {InputEvent} event for every input
     */
    formElementValidationOnBlur(event) {
        this._formElementValidation(event.target);
    },

    // /**
    //  * validate an element after input, if form was validated yet
    //  * 
    //  * @param {InputEvent} event for every input
    //  */
    // formElementValidationOnInput(event) {
    //     console.log("Die OnInput Funktion wurde aufgerufen");
    //     if (this.form.classList.contains("form-was-validated") && event.target.type === "email") {
    //         console.log("Die OnInput Funktion wurde auf einem Text oder Email Feld aufgerufen");
    //         this._formElementValidation(event.target);
    //     }
    // },

    /**
     * validate an element after change
     * 
     * @param {Event} event for every change
     */
    formElementValidationOnChange(event) {
        this._formElementValidation(event.target);
    },

    /**
     * validate an group after change one Element of the group
     * 
     * @param {Event} event that changed
     */
    formGroupValidationOnChange(event) {
        console.log("formGroupValidationOnChange wurde aufgerufen");
        this._formGroupValidation(event.target);

    },

    /**
     * Validate the whole form
     *
     * @returns {boolean} true if valid, false if invalid
     */
    _formValidation() {
        console.log("SubmitForm wurde aufgerufen");
        const formElementInputs = this.$root.querySelectorAll(".form-element input, .form-element textarea"); // TODO: ggf erweitern, sodass auch Form Elemente die kein input Feld als Grundlage haben funktionieren
        const formGroups = this.$root.querySelectorAll(".checkbox-group, .radio-group");

        console.warn("Es wurden " + formGroups.length + "Gruppen gefunden.");

        let formIsValid = true;

        formElementInputs.forEach(formElementInput => {
            console.log("FormularElementId: " + formElementInput.id);
            if (!this._formElementValidation(formElementInput)) {
                formIsValid = false;
            }
        });

        formGroups.forEach(formGroup => {
            if (!this._formGroupValidation(formGroup.querySelector("input"))) {
                formIsValid = false;
            }
        });
        return formIsValid;
    },

    /**
     * validate the element
     * 
     * @param {Element} element to validate
     * 
     * @returns {boolean} true if element is valid, false if element is invalid
     */
    _formElementValidation(element) {
        let elementIsValid = true;
        if (!element.checkValidity()) {
            console.debug("Das Formularelement ist nicht valide.");
            elementIsValid = false;
            // all checkboxes that are not in a group
            if (element.type === "checkbox" && !element.classList.contains("checkbox-in-group")) {
                this._setCustomInvalidClass(element);
            }
            if (element.type === "radio") {
                element.closest(".radio-button-group").querySelectorAll(".native-radio").forEach(nativeRadio => {
                    this._setCustomInvalidClass(nativeRadio)
                });
            }
            this._createErrorMessage(element);
        } else {
            console.log("Das Formularelement ist valide");
            // all checkboxes that are not in a group
            if (element.type === "checkbox" && !element.classList.contains("checkbox-in-group")) {
                this._setCustomValidClass(element);
            }
            if (element.type === "radio") {
                element.closest(".radio-button-group").querySelectorAll(".native-radio").forEach(nativeRadio => {
                    this._setCustomValidClass(nativeRadio)
                });
            }
        }
        return elementIsValid;
    },

    /**
     * validate the group
     * 
     * @param {Element} element that changed in group
     */
    _formGroupValidation(element) {
        let groupIsValid = true;
        // Checkbox group
        if (element.type === "checkbox" && element.classList.contains("checkbox-in-group")) {
            const checkboxGroup = element.closest(".checkbox-group");
            const checkboxes = checkboxGroup.querySelectorAll("input");
            const oneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
            if (!oneChecked && checkboxGroup.classList.contains("bsi-group-required")) {
                console.log("Es wurde nicht mindestens eine Checkbox ausgewählt");
                groupIsValid = false;
                this._setCustomInvalidClass(checkboxGroup);
                this._createGroupErrorMessage(checkboxGroup);
            } else {
                this._setCustomValidClass(checkboxGroup);
            }
        }

        // Radiobutton group
        if (element.type === "radio") {
            
        }
        return groupIsValid;
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
            console.debug("Das Formularelement hat das falsche pattern. Fehlertext: " + this.errorMessageMap[inputElement.id]);
            errorMessageElement.textContent = this.errorMessageMap[inputElement.id];
        }
        else {
            console.debug("Das Formularelement ist nicht korrekt ausgefüllt. Fehlertext: " + this.formOtherError.textContent);
            errorMessageElement.textContent = this.formOtherError.textContent;
        }
    },

    /**
     * set an error message for an group if no error message is set on the group element
     * 
     * @param {Element} group that have a related error message Element
     */
    _createGroupErrorMessage(group) {
        const errorMessageElement = group.querySelector(".bsi-invalid-feedback");

        if (errorMessageElement.textContent === '') {
            errorMessageElement.textContent = this.formErrorValueMissingText.textContent
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

    /**
     * Set for all elements the custom valid state
     * 
     * @param  {...Element} elements 
     */
    _setCustomValidClass(...elements) {
        elements.forEach(element => {
            this._toggleClass(element, "custom-invalid", "custom-valid");
        });
        
    },

    /**
     * Set for all elements the custom invalid state
     * 
     * @param  {...Element} elements 
     */
    _setCustomInvalidClass(...elements) {
        elements.forEach(element => {
            this._toggleClass(element, "custom-valid", "custom-invalid");
        });
    },

}));
