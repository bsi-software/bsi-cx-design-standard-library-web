import VanillaCalendar from "@uvarov.frontend/vanilla-calendar";
import { changeMonth, changeYear, changeYearAndMonth, getDaysOfMonth, getFirstDayOfMonth, toLocalISOStringDate } from "./utils/date-utils.js";
import { fetchSlotsInRange } from "./api.js";

// Basic styles
import "@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css";

// Additional styles
import "@uvarov.frontend/vanilla-calendar/build/themes/light.min.css";
import "@uvarov.frontend/vanilla-calendar/build/themes/dark.min.css";
import { isSlotOnDay } from "./slot/slot.js";

/** @type {Date} */
let selectedMonth = getFirstDayOfMonth();

/**
 * Init calendar
 *
 * @param {import("../prototype/slot-finder.js").Model} model
 * @param {HTMLElement} $element
 */
export function initCalendar(model, $element) {
  const calendar = new VanillaCalendar($element, {
    settings: {
      lang: model.lang,
      visibility: {
        theme: "light",
        daysOutside: false,
      },
      range: {
        disablePast: true,
        disableAllDays: true,
      },
    },
    actions: {
      clickDay: (_, dates) => {
        if (dates && dates.length > 0) {
          model.selectedDate.set(new Date(dates[0]));
        }
      },
      clickMonth: (_, month) => setMonth(changeMonth(selectedMonth, month)),
      clickYear: (_, year) => setMonth(changeYear(selectedMonth, year)),
      clickArrow: (_, year, month) => setMonth(changeYearAndMonth(selectedMonth, year, month)),
    },
  });

  /**
   * @param {Date} month 
   */
  async function setMonth(month) {
    calendar.settings.range.disableAllDays = true;
    calendar.update();

    const slots = await fetchSlotsInRange(model.url, month, changeMonth(month, month.getMonth() + 1));
    const daysWithoutSlots = getDaysOfMonth(month)
      .filter(day => !slots.some(slot => isSlotOnDay(slot, day)));

    calendar.settings.range.disabled = daysWithoutSlots.map(toLocalISOStringDate);
    calendar.settings.range.disableAllDays = false;
    calendar.update();

    model.slots.set(slots);
  }

  calendar.init();
  setMonth(getFirstDayOfMonth());
}