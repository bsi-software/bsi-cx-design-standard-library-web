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

const $slotFinder = document.getElementById("slot-finder");
const $calendar = document.getElementById("calendar");
const $slotsDay = document.getElementById("slots-day");
const $slotsWeek = document.getElementById("slots-week");
const $summary = document.getElementById("summary");
const $bookButton = document.getElementById("book-button");

/** @type {Model}  */
export const model = {
  lang: 'de',
  url: $slotFinder?.dataset.bsiUrl ?? "",
  selectedDate: Observable(new Date()),
  slots: Observable([]),
  selectedSlot: Observable(null),
};

initCalendar(model, $calendar);
initDayView(model, $slotsDay);
initWeekView(model, $slotsWeek);
initSummary(model, $summary, $bookButton);
