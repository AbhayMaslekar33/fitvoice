# FITVOICE — Full Project Context

## What is FITVOICE?
A voice-first AI fitness coaching app. Instead of filling out forms or picking from dropdowns, you speak to the app in plain English. It listens, builds your profile, and coaches you through daily sessions — including exercise videos and form cues for every movement.

The core thesis: most fitness apps fail because setup is annoying and daily guidance is generic. FITVOICE fixes both by letting you just talk.

---

## Product Features

1. **Voice onboarding** — You answer a few questions out loud. The AI transcribes your speech, extracts your goal, timeline, experience level, where you train, schedule, and any injury history. It shows you what it extracted and lets you re-record if it got something wrong.

2. **Smart profile** — Everything extracted from onboarding is saved: goal (e.g. Endurance + Strength), specifics (e.g. 10k in 6 weeks), experience (e.g. Intermediate, 3 years lifting, 1 year running), training location (e.g. full gym + outdoor runs), schedule (e.g. 4 lifts, 3 runs/week), body notes (e.g. left calf tightness, old ACL injury right knee 2019).

3. **Daily coaching sessions** — You open the app and tell the coach how you feel. It knows your full profile and recent history, so it gives you a specific plan for today — not a generic one. Example: "My back's a bit sore from yesterday's deadlifts" → "Skip the heavy pulls. Here's a mobility flow + light upper body."

4. **Exercise cards with video + form cues** — Every exercise in the plan comes with: a video showing correct movement, 3 form cues (e.g. "Move slow, breathe with each rep", "Pause at end range", "Stop if anything pinches"), and Done/Skip buttons.

5. **Context that compounds** — Every session is logged. The coach always knows what you did yesterday, what you're building toward, and what to avoid. The longer you use it, the better it gets.

---

## Current State

### Marketing website — LIVE
- URL: https://fitvoice-pi.vercel.app
- GitHub: https://github.com/AbhayMaslekar33/fitvoice
- Built with: Next.js 16, Tailwind CSS v4, TypeScript, Geist fonts
- Structure: single-page marketing site at `app/page.tsx`
- Email capture: Formspree (form ID placeholder — needs replacing with real ID from formspree.io)

### Marketing site sections (top to bottom):
1. Nav — FITVOICE logo + "Get early access" button (scrolls to waitlist)
2. Hero — headline "Voice coach. Video guidance. Every session." + 3 bullet points + CoachPhone mockup (shows actual exercise card with video block and form cues)
3. Badge bar — Voice-first · AI-powered · Injury-aware · Built for real training
4. How it works — 3 numbered cards (Speak your goals → Meet your profile → Train every day)
5. See it in action — 3 alternating rows with real phone mockups:
   - Onboarding screen: mic button + transcript + extracted fields
   - Profile screen: full profile summary card
   - Coaching screen: chat conversation + exercise card with video + form cues
6. Features grid — 5 feature cards with icons
7. Waitlist — email capture form (Formspree)
8. Footer

### Design system
- Background: #0a0a0a
- Accent: #f4a261 (amber)
- Text: white / #888 for secondary / #555 for muted
- Headings: var(--font-geist-mono), monospace, heavy letter-spacing
- Body: var(--font-geist-sans)
- Cards: #111 background, #1e1e1e border, 20px border-radius
- Buttons: amber filled pill OR amber outlined pill

### 6 mockup screens (separate, in PMVIBE project — do not touch)
These were built as throwaway static screens for demo recording:
- Screen 1: Welcome / splash
- Screen 2: Onboarding question with mic
- Screen 3: Onboarding with transcript + extracted fields
- Screen 4: Profile summary
- Screen 5: Coach screen, mic active
- Screen 6: Coach response + exercise card

---

## Tech Stack Decisions (for the actual app)

| Layer | Choice | Reason |
|---|---|---|
| Mobile | React Native (Expo) | iOS + Android from one codebase |
| Web/PWA | Next.js (already set up) | Can ship web version immediately |
| Voice transcription | OpenAI Whisper API | Accurate, fast, handles accents |
| AI coach | Claude API (Anthropic) | Long context = remembers full profile + history |
| Backend/DB | Supabase | Already have account, handles auth + DB + storage |
| Exercise videos | Supabase Storage (start with YouTube embeds) | Own content later, embed first |
| Deployment | Vercel (web) + Expo EAS (mobile) | Both free tiers available |

---

## Build Phases

### Phase 1 — Voice onboarding (Weekend 1)
- Record audio in app
- Send to Whisper API → get transcript
- Send transcript to Claude → extract structured profile JSON
- Show extracted fields, let user confirm or re-record
- Save profile to Supabase

### Phase 2 — Coach conversation (Weekend 2)
- Voice/text input in coach screen
- Send message + full profile + recent sessions to Claude
- Claude returns structured JSON: today's plan as list of exercises
- Render each exercise as a card

### Phase 3 — Exercise library (Weekend 3)
- Build Supabase table: exercises (name, video_url, form_cues[], muscle_groups[], equipment, difficulty)
- Seed with ~50 core movements
- Claude picks exercises by name from the library when building plans
- App fetches video + cues from Supabase and renders them

### Phase 4 — Session memory (Weekend 4)
- Log every completed session + exercises to Supabase
- Pass last 7 days of sessions into Claude's context window
- Coach now knows "you deadlifted yesterday" without being told

### Phase 5 — Polish + ship (Weekend 5)
- Onboarding flow (progress dots, smooth transitions)
- Push notifications for daily check-in
- App Store submission (Expo EAS)

---

## Key Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Video library is time-consuming to film | Start with YouTube embeds, replace with owned content later |
| Claude context gets too long | Summarize old sessions, keep last 7 days verbatim |
| Whisper transcription costs | Cache transcripts, batch where possible |
| App Store rejection | Follow Apple guidelines from day 1, no dark patterns |

---

## Supabase Project
- Project ref: nnheztimdtihbgojtunw
- Tables needed (not yet created): `profiles`, `sessions`, `exercises`, `session_exercises`

## Accounts & URLs
- GitHub: AbhayMaslekar33
- Vercel marketing site: https://fitvoice-pi.vercel.app
- Email for waitlist: abhaymaslekar33@gmail.com

---

## What's Next
Start Phase 1 this weekend: voice onboarding flow. The goal is to go from a blank app → user speaks their goals → structured profile is saved to Supabase.

The marketing site is live and collecting waitlist emails. The product does not exist yet — we are building it from scratch starting with the mobile app.
