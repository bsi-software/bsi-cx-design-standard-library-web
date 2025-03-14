import { addDays, getFirstDayOfMonth, getLastDayOfMonth, toLocalISOStringWithoutTAndZ } from "./utils/date-utils";

/**
 * @typedef {import("./slot/slot").Slot} Slot
 */

/**
 * Book the selected slot
 *
 * @param {String} url
 * @param {Slot|null} slot
 */
export async function bookSlot(url, slot) {
  if (slot === null) return;

  const form = document.createElement("form");
  form.method = "POST";
  form.action = url;

  const hiddenField = document.createElement("input");
  hiddenField.type = "hidden";
  hiddenField.name = "selectedSlot";
  hiddenField.value = JSON.stringify({
    from: toLocalISOStringWithoutTAndZ(slot.from),
    to: toLocalISOStringWithoutTAndZ(slot.to),
  });
  form.appendChild(hiddenField);
  document.body.appendChild(form);

  form.submit();
}

/**
 * Fetch slots of the given month
 *
 * @param {String} url
 * @param {Date} month
 * @returns {Promise<Slot[]>} slots
 */
export async function fetchSlotsOfMonth(url, month) {
  // Because the API takes the time into account, we need to fetch slots until the first day of the next month
  // e.g. Fri Nov 01 2024 00:00:00 to Sun Dec 01 2024 00:00:00 will fetch all slots of November
  return fetchSlotsInRange(url, getFirstDayOfMonth(month), addDays(getLastDayOfMonth(month), 1));
}

/**
 * Fetch slots for the given date range
 *
 * @param {String} url
 * @param {Date} fromDate
 * @param {Date} toDate
 * @returns {Promise<Slot[]>} slots
 */
async function fetchSlotsInRange(url, fromDate, toDate) {
  const from = toLocalISOStringWithoutTAndZ(fromDate);
  const to = toLocalISOStringWithoutTAndZ(toDate);
  const data = await fetch(url + "&" + new URLSearchParams({ from, to }), {
    headers: { Accept: "application/json" },
  });
  const json = await data.json();
  return json.timeslots?.map(convertSlot) ?? [];
}

/**
 * Convert string slots to date slots
 *
 * @param {{ from: String, to: String }} slot
 * @returns {Slot} slots
 */
function convertSlot({ from, to }) {
  return {
    from: new Date(from),
    to: new Date(to),
  };
}
