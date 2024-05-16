
import Alpine from '@alpinejs/csp';
import Observable from "../src/utils/observable.js";
import { initCalendar } from "../src/calendar.js";
import { initSummary } from "../src/summary.js";
import { initDayView, initWeekView } from "../src/slot/slot.js";

/**
 * @typedef {import("../src/slot/slot.js").Slot} Slot
 */

/**
 * @template T
 * @typedef {import("../src/utils/observable.js").Observable<T>} Observable
 */

/**
 * @typedef {('en' | 'de' | 'fr' | 'it')} Language
 */

/**
 * Model
 *
 * @typedef {Object} Model
 * @property {Language} locale
 * @property {String} url
 * @property {Observable<Date>} selectedDate
 * @property {Observable<Slot[]>} slots
 * @property {Observable<Slot|null>} selectedSlot
 */

Alpine.data('slotFinder', () => ({

  /** @type {Model}  */
  model: {
    locale: '',
    url: '',
    selectedDate: Observable(new Date()),
    slots: Observable([]),
    selectedSlot: Observable(null),
  },

  init() {
    this.model.locale = document.documentElement.lang.slice(0, 2) ?? 'de';
    this.model.url = this.$el.dataset.bsiUrl ?? '';
  },
  
  initCalendar() {
    initCalendar(this.model, this.$el);
  },

  initDayView() {
    initDayView(this.model, this.$el, this.$refs.noSlotsText, this.$refs.chooseAnotherDayText);
  },

  initWeekView() {
    initWeekView(this.model, this.$el, this.$refs.noSlotsText, this.$refs.chooseAnotherDayText);
  },

  initSummary() { 
    initSummary(this.model, this.$el, this.$refs.bookButton);
  },
}));
