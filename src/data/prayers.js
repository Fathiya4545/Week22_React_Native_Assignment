// The five daily prayers, with fixed example times. `minutes` is the time of day
// in minutes past midnight — it makes comparing "now" to each prayer easy.
export const PRAYERS = [
  { name: "Fajr", arabic: "الفجر", time: "05:30", minutes: 5 * 60 + 30 },
  { name: "Dhuhr", arabic: "الظهر", time: "12:30", minutes: 12 * 60 + 30 },
  { name: "Asr", arabic: "العصر", time: "15:45", minutes: 15 * 60 + 45 },
  { name: "Maghrib", arabic: "المغرب", time: "18:15", minutes: 18 * 60 + 15 },
  { name: "Isha", arabic: "العشاء", time: "19:45", minutes: 19 * 60 + 45 },
];

// Which prayer is happening right now? It's the LAST prayer whose time has
// already started. (Before Fajr, last night's Isha is still the current one.)
export function getCurrentPrayerIndex(now) {
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  let current = -1;
  for (let i = 0; i < PRAYERS.length; i++) {
    if (minutesNow >= PRAYERS[i].minutes) current = i;
  }
  return current === -1 ? PRAYERS.length - 1 : current;
}
