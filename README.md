# Week 22 — Prayer Times — the five daily prayers (starter)

Your React Native assignment. Build a small app that lists the **five daily prayers** and **highlights the
current one** as time passes. The data and the navigation are done for you — your job is the **UI** (using
`<View>` and `<Text>`), the **styles** (`StyleSheet`), and a **little bit of logic** (the highlight).

## Run it

You need **Node.js** and the free **Expo Go** app on your phone.

```bash
npm install
npx expo start
```

Scan the QR code with your phone, or press `w` for a quick web preview. It runs from the first minute —
you'll see two empty screens, and you'll fill them in.

## What's given

- `src/data/prayers.js` — the five prayers with their times, **and** a `getCurrentPrayerIndex(now)` helper
  that tells you which prayer is current. **Don't change this** — just use it.
- `src/app/_layout.js` — the bottom tabs ("Prayers" and "About"). Done.

## Your job — two screens

### 1. `src/app/index.js` — the Prayers screen

Follow the numbered `TODO`s in the file:

1. Call `getCurrentPrayerIndex(now)` to get the current prayer's index (the clock/timer is already set up).
2. Add a **header** that shows the current prayer's name.
3. **Map** over `PRAYERS` to show all five in styled rows (name + time), and **highlight** the current one
   (when `index === currentIndex`).
4. Fill in the **styles** to make it look nice.

### 2. `src/app/about.js` — the About screen

A title and a sentence or two about the five prayers — pure `<View>` / `<Text>` / styles.

## Done when

- All five prayers show, each with its name and time.
- The current prayer stands out (a different color / a badge) — and it's the *correct* one for the time.
- The About screen has some content.
- It looks clean, and there are no errors in the terminal.

## Submit

Push to GitHub and add a **screenshot** of your app running. Then paste your repo link into the submission
box.
