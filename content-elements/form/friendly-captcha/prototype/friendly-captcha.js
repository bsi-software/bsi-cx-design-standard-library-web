import Alpine from '@alpinejs/csp';

Alpine.data('friendlyCaptcha', () => ({ 

    setSideKeyAsAttribute() {

        let siteKey = this.$root.querySelector(".siteKey").innerHTML;
        this.$root.querySelector(".frc-captcha").setAttribute("data-sitekey", siteKey);
        this.$root.querySelector(".siteKeyWrapper").remove();
        this.$root.querySelector(".response-friendly-captcha").remove();

        return this.$root.innerHTML;
    },

    init() {

    }

}))
