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

        // save all invalid-feedback error messages with id from elements and set aria values for all form controls
        this.form.querySelectorAll(".form-element input, .form-element textarea, .form-element select").forEach(formControlElement => {
            const formElement = formControlElement.closest(".form-element");
            const invalidFeedbackElement = formElement ? formElement.querySelector(".bsi-invalid-feedback") : null;
            const errorMessage = invalidFeedbackElement ? invalidFeedbackElement.textContent.trim() : "";

            // Cache field-specific fallback error text (keyed later by input id).
            if (formControlElement.id) {
                this.inputErrorMessages.push({
                    id: formControlElement.id,
                    errorMessage,
                });
            }

            // remove error messages from DOM, because they should only be added if the element is invalid and not on page load.
            if (invalidFeedbackElement) {
                invalidFeedbackElement.textContent = '';
            }
            // show counter if maxlength is set and set counter text to 0 / maxlength
            this._countCharacters(formControlElement);
            // set AriaDescribedByElements for all elements
            this._setAriaValuesForElement(formControlElement);
            this._setAriaLabledByElements(formControlElement);
        });

        // create a map of inputErrorMessages
        this.errorMessageMap = Object.fromEntries(
            this.inputErrorMessages.map(entry => [entry.id, entry.errorMessage])
        );

        this.form.querySelectorAll(".form-element").forEach(formElement => {
            this._setFeedbackVisibilityState(formElement, false);
        });
    },
    
    /**
     * Function that calles, if the formular is submited
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
     * Function that calles, if the formular is reseted
     * Anything beyond removing custom-valid and custom-invalid is handled in the element itself. This is already the case with the file-upload element.
     */
    resetForm() {
        this.form.querySelectorAll(".custom-invalid").forEach(element => {
            element.classList.remove("custom-invalid");
        });
        
        this.form.querySelectorAll(".custom-valid").forEach(element => {
            element.classList.remove("custom-valid");
        });

        this.form.querySelectorAll(".form-element").forEach(formElement => {
            this._setFeedbackVisibilityState(formElement, false);
        });
        
    },

    /**
     * validate an element after leaf it
     * 
     * @param {InputEvent} event for every input
     */
    formElementValidationOnBlur(event) {
        this._formElementValidation(event.target);
    },

    /**
     * validate an element after change
     * 
     * @param {Event} event for every change
     */
    formElementValidationOnChange(event) {
        this._formElementValidation(event.target);
    },

    /**
     * validate an element while typing
     *
     * @param {InputEvent} event for every input
     */
    formElementValidationOnInput(event) {
        this._formElementValidation(event.target);
    },

    /**
     * validate an group after change one Element of the group
     * 
     * @param {Event} event that changed
     */
    formGroupValidationOnChange(event) {
        this._formGroupValidation(event.target);

    },

    /**
     * Validate the whole form
     *
     * @returns {boolean} true if valid, false if invalid
     */
    _formValidation() {
        const formElementInputs = this.$root.querySelectorAll(".form-element input, .form-element textarea, .form-element select");
        const formGroups = this.$root.querySelectorAll(".checkbox-group, .radio-group");

        let formIsValid = true;

        // Validate all standalone controls
        formElementInputs.forEach(formElementInput => {
            if (!this._formElementValidation(formElementInput)) {
                formIsValid = false;
            }
        });

        // Validate grouped controls (checkbox/radio groups)
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
            elementIsValid = false;
            // all checkboxes and radios that are not in a group
            if (element.type === "checkbox" && !element.classList.contains("checkbox-in-group")) {
                this._setCustomInvalidClass(element);
            }
            if (element.type === "radio" && element.classList.contains("native-radio")) {
                element.closest(".radio-button-group").querySelectorAll(".native-radio").forEach(nativeRadio => {
                    this._setCustomInvalidClass(nativeRadio)
                });
            }
            this._createErrorMessage(element);
        } else {
            // If element became valid, clear stale error state and show success feedback if enabled.
            // all checkboxes and radios that are not in a group
            if (element.type === "checkbox" && !element.classList.contains("checkbox-in-group")) {
                this._setCustomValidClass(element);
            }
            if (element.type === "radio" && element.classList.contains("native-radio")) {
                element.closest(".radio-button-group").querySelectorAll(".native-radio").forEach(nativeRadio => {
                    this._setCustomValidClass(nativeRadio)
                });
            }

            // remove error message if element is valid and not a group element
            if (!(element.type === "checkbox" && element.classList.contains("checkbox-in-group")) && !(element.type === "radio" && element.classList.contains("native-radio"))) {
                const formElement = element.closest(".form-element");
                if (formElement) {
                    const errorElement = formElement.querySelector(".bsi-invalid-feedback");
                    if (errorElement) {
                        errorElement.textContent = "";
                    }
                    this._setFeedbackVisibilityState(formElement, false);
                }
            }
        }
        this._countCharacters(element);
        this._setAriaValuesForElement(element);
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
                groupIsValid = false;
                this._setCustomInvalidClass(checkboxGroup);
                this._createGroupErrorMessage(checkboxGroup);
            } else {
                this._setCustomValidClass(checkboxGroup);
                const errorMessageElement = checkboxGroup.querySelector(".bsi-invalid-feedback");
                if (errorMessageElement) {
                    errorMessageElement.textContent = "";
                }
                this._setFeedbackVisibilityState(checkboxGroup, false);
            }
        }

        // Radiobutton group
        if (element.type === "radio" && element.classList.contains("native-radio")) {
            const radioGroup = element.closest(".radio-group");
            if (radioGroup) {
                const radios = radioGroup.querySelectorAll(".native-radio");
                const oneChecked = Array.from(radios).some(radio => radio.checked);
                const isGroupRequired =
                    radioGroup.classList.contains("bsi-group-required") ||
                    Array.from(radios).some(radio => radio.required);

                if (!oneChecked && isGroupRequired) {
                    groupIsValid = false;
                    this._setCustomInvalidClass(...radios);
                    this._createGroupErrorMessage(radioGroup);
                } else {
                    this._setCustomValidClass(...radios);
                    const errorMessageElement = radioGroup.querySelector(".bsi-invalid-feedback");
                    if (errorMessageElement) {
                        errorMessageElement.textContent = "";
                    }
                    this._setFeedbackVisibilityState(radioGroup, false);
                }
            }
        }
        this._setAriaValuesForElement(element);
        return groupIsValid;
    },

    /**
     * Update max-length counter text for a form control when available.
     *
     * @param {Element} element form control element
     * @returns {void}
     */
    _countCharacters(element) {
        const maxLength = element.getAttribute("maxlength");
        const currentLength = element.value.length;
        const counterElement = element.closest(".form-element").querySelector(".max-char-counter");
        const showMaxLength = element.closest(".form-element").classList.contains("bsi-show-max-length-counter") && maxLength !== null && maxLength !== undefined && maxLength !== "";
        if (counterElement && showMaxLength) {
            counterElement.textContent = `${currentLength} / ${maxLength}`;
        } else if (counterElement) {
            counterElement.textContent = '';
        }
    },

    /**
     * Set ariaLabelledByElements for an input element with the related label element
     * @param {Element} inputField 
     * @returns 
     */
    _setAriaLabledByElements(inputField) {
        const label = inputField.closest(".form-element").querySelector(".form-label");

        if (!label) return;
        if ('ariaLabelledByElements' in Element.prototype) {
            // Use this browser-supported ARIA property when available.
            inputField.ariaLabelledByElements = [label];
        }
    },

    /**
     * Set ariaDescribedByElements for an input element with helper, error, and/or success feedback
     * @param {Element} inputElement
     */
    _setAriaValuesForElement(inputField) {
        var formElement = inputField.closest(".form-element");
        if (!formElement) return;
        const describedElements = [];
        // Helper-text if visible and not empty
        const helper = formElement.querySelector('.helper-text');
        if (
            helper 
            && window.getComputedStyle(helper).display !== 'none' 
            && helper.textContent.trim() !== ''
        ) {
            describedElements.push(helper);
        }
        // Error-message if visible and not empty
        const error = formElement.querySelector('.bsi-invalid-feedback');
        if (error && error.classList.contains("is-visible")) {
            inputField.setAttribute("aria-invalid", true);
            describedElements.push(error);
        } else {
            inputField.setAttribute("aria-invalid", false);
        }
        if ('ariaDescribedByElements' in Element.prototype) {
            // Reference only the helper/error/success elements that are currently visible.
            inputField.ariaDescribedByElements = describedElements;
        }
    },

    /**
     * Create an error message for an input Element
     * 
     * @param {Element} inputElement that have a related error message Element
     */
    _createErrorMessage(inputElement) {
        const formElement = inputElement.closest(".form-element");
        if (!formElement) {
            return;
        }

        const errorMessageElement = formElement.querySelector(".bsi-invalid-feedback");
        if (!errorMessageElement) {
            return;
        }
        
        const validity = inputElement.validity;
        const validationMessage = inputElement.validationMessage;

        if (validity.valueMissing) {
            errorMessageElement.textContent = this.formErrorValueMissingText.textContent;
        }
        else if (validity.typeMismatch) {
            errorMessageElement.textContent = this.formErrorTypeMissmatchText.textContent;
        }
        else if (validity.patternMismatch) {
            errorMessageElement.textContent = this.errorMessageMap[inputElement.id];
        }
        else if (validationMessage == "placeholder is selected") {
            errorMessageElement.textContent = this.errorMessageMap[inputElement.id];
        }
        else if (this.formOtherError !== "") {
            errorMessageElement.textContent = this.formOtherError.textContent;
        }

        this._setFeedbackVisibilityState(formElement, errorMessageElement.textContent.trim() !== "");
    },

    /**
     * set an error message for an group if no error message is set on the group element
     * 
     * @param {Element} group that have a related error message Element
     */
    _createGroupErrorMessage(group) {
        const errorMessageElement = group.querySelector(".bsi-invalid-feedback");
        if (!errorMessageElement) {
            return;
        }

        // Only set a generic error message on the group if there is not already an error message shown
        // for the group (e.g. from a specific input element in the group)
        if (errorMessageElement.textContent === '') {
            errorMessageElement.textContent = this.formErrorValueMissingText.textContent;
        }

        this._setFeedbackVisibilityState(group, errorMessageElement.textContent.trim() !== "");
    },

    /**
     * Set visibility state for feedback elements in a form element and update wrapper state.
     *
     * @param {Element} formElement form element that contains feedback wrapper and feedback elements
     * @param {boolean} isVisible visibility state that should be applied
     * @param {string} feedbackSelector selector for feedback elements that should get the visibility class
     */
    _setFeedbackVisibilityState(
        formElement,
        isVisible,
        feedbackSelector = ".bsi-invalid-feedback"
    ) {
        if (!formElement) {
            return;
        }

        const feedbackElements = formElement.querySelectorAll(feedbackSelector);
        feedbackElements.forEach(feedbackElement => {
            feedbackElement.classList.toggle("is-visible", isVisible);
        });

        const hasVisibleFeedback = formElement.querySelector(
            ".form-field-feedback-wrapper > .is-visible"
        ) !== null;
        formElement.classList.toggle("has-visible-feedback", hasVisibleFeedback);
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
