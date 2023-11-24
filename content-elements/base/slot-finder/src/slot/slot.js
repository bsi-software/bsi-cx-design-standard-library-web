import { addDays, calcMinsBetween, formatTime, getLastMonday, getMonthShort, getWeekday, getWeekdayShort, isSameDay } from "../utils/date-utils.js";
import { Template } from "../utils/template.js";

/** @type {number} number of days shown in the week view */
const NUMBER_OF_DAYS = 5;

/**
 * @typedef {import("../../prototype/slot-finder.js").Model} Model
 */

/**
 * A timeslot
 *
 * @typedef {Object} Slot
 * @property {Date} from
 * @property {Date} to
 */

/**
 * Init day view
 *
 * @param {Model} model
 * @param {HTMLElement} $element
 */
export function initDayView(model, $element) {
  model.slots.onChange(() => renderDayView(model, $element));
  model.selectedDate.onChange(() => renderDayView(model, $element));
  model.selectedSlot.onChange(() => renderDayView(model, $element));
}

/**
 * Init week view
 *
 * @param {Model} model
 * @param {HTMLElement} $element
 */
export function initWeekView(model, $element) {
  model.slots.onChange(() => renderWeekView(model, $element));
  model.selectedDate.onChange(() => renderWeekView(model, $element));
  model.selectedSlot.onChange(() => renderWeekView(model, $element));
}

/**
 * Render day view
 *
 * @param {Model} model
 * @param {HTMLElement} $element
 */
function renderDayView(model, $element) {
  const slotsOfDay = findSlotsOfDay(model.slots.get(), model.selectedDate.get());
  const slots = slotsOfDay.map((slot) => createSlot(slot, model));

  $element?.replaceChildren(...slots);

  if (slots.length === 0) {
    $element.innerHTML = createNoSlots().outerHTML;
  }
}

/**
 * Render week view
 *
 * @param {Model} model
 * @param {HTMLElement} $element
 */
function renderWeekView(model, $element) {
  let noSlots = true;
  const startDate = getLastMonday(model.selectedDate.get());
  $element.innerHTML = "";
  [...Array(NUMBER_OF_DAYS)].map((_, i) => {
    const date = addDays(startDate, i);
    const slotsOfDay = findSlotsOfDay(model.slots.get(), date);

    if (slotsOfDay.length > 0) {
      noSlots = false;
    }

    const $day = createDay(model.lang, addDays(startDate, i));
    const $slots = createSlots(slotsOfDay, model);

    $element?.append($day, $slots);
  });

  if (noSlots) {
    $element.innerHTML = createNoSlots().outerHTML;
  }
}

/**
 * Create a day and its slots
 * @param {Date} date
 * @param {import("../../prototype/slot-finder.js").Language} lang
 * @returns {Element}
 */
function createDay(lang, date) {
  return Template(`
    <div class="day">
      <div class="weekday long">${getWeekday(lang, date)}</div>
      <div class="weekday short">${getWeekdayShort(lang, date)}</div>
      <div class="date">${date.getDate()} ${getMonthShort(lang, date)}</div>
    </div>
  `);
}

/**
 * Create slot elements
 *
 * @param {Slot[]} slots
 * @param {import("../../prototype/slot-finder.js").Model} model
 * @returns {HTMLElement}
 */
export function createSlots(slots, model) {
  const $slots = document.createElement("div");
  $slots.classList.add("slots");
  $slots.append(...slots.map((slot) => createSlot(slot, model)));
  return $slots;
}

/**
 * Create a slot element
 *
 * @param {Slot} slot
 * @param {import("../../prototype/slot-finder.js").Model} model
 * @returns {Element}
 */
export function createSlot(slot, model) {
  const $slot = Template(`
    <div class="slot ${isEqual(slot, model.selectedSlot.get()) ? 'selected' : ''}">
      <div class="time">
        <div class="from-time">${formatTime(slot.from)}</div>
        <div class="to-time">${formatTime(slot.to)}</div>
      </div>
      <div class="duration prefix-clock">${calcSlotDuration(slot)} min</div>
    </div>
  `);
  $slot.addEventListener("click", () => model.selectedSlot.set(slot));
  return $slot;
}

/**
 * Create the no slots content
 *
 * @returns {Element}
 */
export function createNoSlots() {
  return Template(`
    <div class="no-slots">Keine Termine verfügbar</div>
  `);
}

/**
 * Find slots of the given day
 *
 * @param {Slot[]} slots
 * @param {Date} date
 * @returns {Slot[]} slots of the given day
 */
export function findSlotsOfDay(slots, date) {
  return slots.filter((slot) => isSlotOnDay(slot, date));
}

/**
 * Check if slot is on the given day
 *
 * @param {Slot} slot
 * @param {Date} date
 * @returns {Boolean} is slot on the given day
 */
export function isSlotOnDay({ from, to }, date) {
  return isSameDay(from, date) || isSameDay(to, date);
}

/**
 * Checks if slots are equal
 *
 * @param {Slot|null} slot1
 * @param {Slot|null} slot2
 * @returns {Boolean} is equal
 */
function isEqual(slot1, slot2) {
  return (
    slot1?.from.getTime() === slot2?.from.getTime() &&
    slot1?.to.getTime() === slot2?.to.getTime()
  );
}

/**
 * Formats the time slot of the given dates to HH:MM - HH:MM
 *
 * @param {Slot} slot
 * @returns {String} formatted time slot
 */
export function formatSlot({ from, to }) {
  return `${formatTime(from)} - ${formatTime(to)}`;
}

/**
 * Get duration of the slot
 *
 * @param {Slot} slot
 * @returns {Number} duration of the slot in minutes
 */
function calcSlotDuration({ from, to }) {
  return calcMinsBetween(from, to);
}
