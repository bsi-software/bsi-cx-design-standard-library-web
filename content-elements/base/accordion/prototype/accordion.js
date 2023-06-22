import Alpine from 'alpinejs';

Alpine.data('accordionElement', () => ({
    toggleActive(){
        this.$root.classList.toggle('active');
    },
}));