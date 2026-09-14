import Alpine from "@alpinejs/csp";

Alpine.data("carousel", () => ({
  current: 0,
  slides: [],
  track: null,
  autoplay: true,
  autoplayDelay: 5000,
  interval: null,
  init() {
    this.track = this.$el.querySelector(".carousel__track");
    this.autoplayDelay = this.$refs.intervall.textContent?.trim();
    this.slides = Array.from(
      this.track.querySelectorAll(":scope > .bsi-element-col-two-ILRIL0, :scope > .bsi-element-col-one-l2ZclN"),
    );
    if (!this.slides.length) {
      return;
    }
    this.setup();
    this.createDots();
    this.update();
    this.bindEvents();
    if (this.autoplay) {
      this.startAutoplay();
    }
  },

  setup() {
    this.slides.forEach((slide) => {
      slide.classList.add("carousel__slide");
    });
  },

  bindEvents() {
    const prev = this.$el.querySelector(".carousel__prev");
    const next = this.$el.querySelector(".carousel__next");
    prev?.addEventListener("click", () => {
      this.prev();
    });
    next?.addEventListener("click", () => {
      this.next();
    });
  },
  next() {
    if (!this.slides.length) {
      return;
    }
    this.current = (this.current + 1) % this.slides.length;
    this.update();
    this.restartAutoplay();
  },

  prev() {
    if (!this.slides.length) {
      return;
    }
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;
    this.update();
    this.restartAutoplay();
  },

  goTo(index) {
    if (index < 0 || index >= this.slides.length) {
      return;
    }
    this.current = index;
    this.update();
    this.restartAutoplay();
  },

  update() {
    const offset = this.current * 100;
    this.track.style.transform = `translateX(-${offset}%)`;
    this.updateDots();
  },

  createDots() {
    const container = this.$el.querySelector(".carousel__dots");
    if (!container) {
      return;
    }
    container.innerHTML = "";
    this.slides.forEach((slide, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel__dot";
      dot.setAttribute("aria-label", `Vai alla slide ${index + 1}`);
      dot.addEventListener("click", () => this.goTo(index));
      container.appendChild(dot);
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

  destroy() {
    clearInterval(this.interval);
  },
}));
