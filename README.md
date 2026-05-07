# FITVOICE

**Voice-first AI fitness coach.**

Tell FITVOICE your goals in plain English. It builds your profile, coaches your daily sessions, and walks you through every exercise — with video and form cues — so you always train right.

🌐 **Live:** https://fitvoice-pi.vercel.app

---

## What is this?

Most fitness apps fail because setup is tedious and daily guidance is generic. FITVOICE fixes both:

- **No forms.** You speak. It listens. Your profile is built from a single conversation.
- **No generic plans.** The coach knows your goals, injuries, schedule, and what you did yesterday — every plan is built for today.
- **No guessing on form.** Every exercise comes with a video and form cues.

---

## Features

| Feature | Description |
|---|---|
| 🎙 Voice onboarding | Answer questions out loud — AI extracts your goal, schedule, experience, and injury history |
| 🧠 Smart profile | Coach stores everything: goal, timeline, experience, location, schedule, body notes |
| ⚡ Adaptive daily coaching | Tell the coach how you feel, get a plan built for right now |
| 📋 Exercise cards | Every movement comes with a video + 3 form cues |
| 🔁 Context that compounds | Every session is logged — coach always knows what you did yesterday |

---

## Current State

**Phase: Marketing website (live)**

The app does not exist yet. We are building it phase by phase starting with voice onboarding. The marketing site is live and collecting early access signups.

### Build Roadmap

| Phase | Focus | Status |
|---|---|---|
| 0 | Marketing website | ✅ Live |
| 1 | Voice onboarding → structured profile | 🔜 Next |
| 2 | Coach conversation → daily plan | Planned |
| 3 | Exercise library with videos + form cues | Planned |
| 4 | Session memory — coach knows your history | Planned |
| 5 | Polish + App Store submission | Planned |

---

## Tech Stack

| Layer | Choice |
|---|---|
| Web / Marketing | Next.js 16, Tailwind CSS v4, TypeScript |
| Mobile (planned) | React Native (Expo) |
| Voice transcription | OpenAI Whisper API |
| AI coach | Claude API (Anthropic) |
| Backend / Database | Supabase |
| Exercise videos | Supabase Storage |
| Deployment | Vercel (web) · Expo EAS (mobile) |

---

## Design System

- **Background:** `#0a0a0a`
- **Accent:** `#f4a261` (amber)
- **Headings:** Geist Mono, bold, tight letter-spacing
- **Body:** Geist Sans
- **Cards:** `#111` background · `#1e1e1e` border · `20px` radius

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
  page.tsx        # Marketing site (single page)
  layout.tsx      # Root layout + metadata
  globals.css     # Base styles + Tailwind
CONTEXT.md        # Full product context for AI-assisted development
```

---

## Contact

Built by [@AbhayMaslekar33](https://github.com/AbhayMaslekar33)  
Early access: https://fitvoice-pi.vercel.app
