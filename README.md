# Week 22 — Prayer Times

Build a small app that lists the five daily prayers and highlights the one happening now.

## 1. Run the app

1. Install Node.js on your computer.
2. Install the free Expo Go app on your phone.
3. In this folder, run:

```bash
npm install
npx expo start
```

4. Scan the QR code with your phone, or press `w` to open it in the browser.

You should see two tabs: **Prayers** and **About**. Each tab already has words on it. Follow the steps in the files.

## 2. Already done for you

Do not change these.

- `src/data/prayers.js` — the five prayers, plus `getCurrentPrayerIndex(now)`.
- `src/app/_layout.js` — the Prayers and About tabs.
- The clock on the Prayers screen.
- The prayers list, already saved in state as `prayers`.

Each prayer has `name`, `arabic`, and `time`.

## 3. Prayers screen

Open `src/app/index.js`. Do the steps in order. Save and check the app after each one.

1. **Add the missing styles.** The styles are already written at the bottom of the file. You only attach them.
   - The first `<View>` needs `style={styles.content}`
   - The “Current prayer” `<Text>` needs `style={styles.hint}`
   - The `<Text>` inside `renderItem` needs `style={styles.hint}`
2. **Find the current prayer.** Add `const currentIndex = getCurrentPrayerIndex(now);`
3. **Give the list its data.** The FlatList does not have its data yet. Use the `prayers` state. Do not use `.map`.
4. **Finish the row inside `renderItem`.** `item` is one prayer. `index` is its position. Show the name and the time. Use `styles.name` and `styles.time`. When `index` matches `currentIndex`, also use `styles.rowCurrent`.
5. **Name the current prayer.** Replace “Current prayer will show here.” with `prayers[currentIndex].name`.

You can change a color or a size in the style list if you want. You do not have to.

Before Fajr, the current prayer is Isha. That is expected.

## 4. About screen

Open `src/app/about.js`.

1. **Add the missing styles.**
   - The `<View>` needs `style={styles.content}`
   - The sentence `<Text>` needs `style={styles.body}`
2. Replace that sentence with one or two sentences about the five daily prayers.

## 5. Done when

- The Prayers tab lists Fajr, Dhuhr, Asr, Maghrib, and Isha.
- Each row shows the name and the time.
- The current prayer looks different from the others, and it matches the time of day.
- The current prayer’s name also shows at the top.
- The Views and Texts that were missing a style now have one.
- The About tab has your own sentences.
- The terminal has no errors.

## 6. Submit

Push to GitHub and add a screenshot of the app running. Paste your repo link into the submission box.
