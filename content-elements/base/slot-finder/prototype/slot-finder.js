
import Alpine from 'alpinejs';
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
 * @property {Language} lang
 * @property {String} url
 * @property {Observable<Date>} selectedDate
 * @property {Observable<Slot[]>} slots
 * @property {Observable<Slot|null>} selectedSlot
 */

/** @type {Model}  */
const model = {
  lang: 'de',
  url: '',
  selectedDate: Observable(new Date()),
  slots: Observable([]),
  selectedSlot: Observable(null),
};

Alpine.data('slotFinder', () => ({
  init() { model.url = this.$el.dataset.bsiUrl ?? '' },
  initCalendar() { initCalendar(model, this.$el) },
  initDayView() { initDayView(model, this.$el) },
  initWeekView() { initWeekView(model, this.$el) },
  initSummary() { initSummary(model, this.$el, this.$refs.bookButton) },
}));
