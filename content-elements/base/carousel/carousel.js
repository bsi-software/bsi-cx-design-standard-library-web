import Alpine from "@alpinejs/csp";

Alpine.data("carousel", () => ({
  current: 0,
  slides: [],
  track: null,
  autoplayDelay: 5000,
  autoplay: true,
  interval: null,

  init() {
    this.track = this.$el.querySelector(".carousel__track");

    this.slides = Array.from(this.$el.querySelectorAll(".carousel__slide"));

    this.createDots();

    this.update();

    if (this.autoplay) {
      this.startAutoplay();
    }
  },

  next() {
    this.current++;

    if (this.current >= this.slides.length) {
      this.current = 0;
    }

    this.update();

    this.restartAutoplay();
  },

  prev() {
    this.current--;

    if (this.current < 0) {
      this.current = this.slides.length - 1;
    }

    this.update();

    this.restartAutoplay();
  },

  goTo(index) {
    this.current = index;

    this.update();

    this.restartAutoplay();
  },

  update() {
    this.track.style.transform = `translateX(-${this.current * 100}%)`;

    this.updateDots();
  },

  createDots() {
    const dotsContainer = this.$el.querySelector(".carousel__dots");

    this.slides.forEach((slide, index) => {
      const dot = document.createElement("button");

      dot.type = "button";

      dot.classList.add("carousel__dot");

      dot.addEventListener("click", () => {
        this.goTo(index);
      });

      dotsContainer.appendChild(dot);
    });
  },

  updateDots() {
    const dots = this.$el.querySelectorAll(".carousel__dot");

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === this.current);
    });
  },

  startAutoplay() {
    this.interval = setInterval(() => {
      this.next();
    }, this.autoplayDelay);
  },

  restartAutoplay() {
    clearInterval(this.interval);

    if (this.autoplay) {
      this.startAutoplay();
    }
  },
}));
