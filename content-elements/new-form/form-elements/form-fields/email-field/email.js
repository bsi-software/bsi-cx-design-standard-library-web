import Alpine from "@alpinejs/csp";

Alpine.data("emailField", () => ({

    /**
     * Initialize email field pattern to enforce client-side format validation.
     *
     * @returns {void}
     */
    init() {
        // Unfortunately, it is not possible to set this directly as a pattern attribute in template.twig, as RexEx cannot then handle the escaping. 
        this.$el.setAttribute('pattern', '^[^@\\s]{1,}@[^@\\[\\]\\s]{1,}\\.[^@\\[\\]\\s]{2,}$');
    }

}));