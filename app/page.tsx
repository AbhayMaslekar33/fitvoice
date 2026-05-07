"use client";

import { useState } from "react";

const AMBER = "#f4a261";
const BG = "#0a0a0a";

/* ── Icons ── */
function MicSVG({ size = 24, color = AMBER }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  );
}

function MicIcon() { return <MicSVG />; }

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <polygon points="13,2 4,14 12,14 11,22 20,10 12,10" fill={AMBER} opacity="0.85" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <polygon points="10,8 16,11 10,14" fill={AMBER} stroke="none" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

/* ── Shared phone shell ── */
function Phone({ children, glow = false }: { children: React.ReactNode; glow?: boolean }) {
  return (
    <div style={{
      width: 260,
      height: 560,
      background: "#111",
      borderRadius: 40,
      border: "1px solid #2a2a2a",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      flexShrink: 0,
      position: "relative",
      boxShadow: glow
        ? `0 0 120px rgba(244,162,97,0.1), 0 40px 80px rgba(0,0,0,0.7)`
        : `0 40px 80px rgba(0,0,0,0.6)`,
    }}>
      {/* Status bar */}
      <div style={{
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 22px",
        fontSize: 11,
        color: "#555",
        flexShrink: 0,
      }}>
        <span>9:41</span>
        <span style={{ letterSpacing: 2 }}>···</span>
      </div>
      {children}
    </div>
  );
}

/* ── Demo phone 1: Onboarding with transcript ── */
function OnboardingPhone() {
  return (
    <Phone>
      {/* Progress dots */}
      <div style={{ display: "flex", gap: 7, justifyContent: "center", paddingTop: 8 }}>
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === 0 ? AMBER : "#2a2a2a" }} />
        ))}
      </div>

      {/* Question */}
      <div style={{ padding: "20px 22px 0", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
          What are you training for?
        </div>
        <div style={{ color: "#555", fontSize: 12, marginTop: 8 }}>
          Tap the mic and answer in your own words
        </div>
      </div>

      {/* Mic */}
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0 16px" }}>
        <div style={{
          width: 72, height: 72, borderRadius: "50%", background: AMBER,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 0 0 12px rgba(244,162,97,0.12)`,
        }}>
          <MicSVG size={28} color={BG} />
        </div>
      </div>

      {/* Transcript bubble */}
      <div style={{ margin: "0 16px", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 14, padding: "12px 14px" }}>
        <div style={{ color: "#fff", fontSize: 13, lineHeight: 1.55 }}>
          &ldquo;I&rsquo;m training for a 10k in 6 weeks and I want to keep getting stronger.&rdquo;
        </div>
      </div>

      {/* Extracted card */}
      <div style={{ margin: "10px 16px 0", background: "#161616", border: "1px solid #222", borderRadius: 14, padding: "12px 14px" }}>
        <div style={{ fontSize: 10, color: "#555", fontFamily: "var(--font-geist-mono)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
          Extracted
        </div>
        <div style={{ fontSize: 12, color: "#bbb", lineHeight: 1.8 }}>
          <span style={{ color: AMBER }}>Goal:</span> Endurance + Strength<br />
          <span style={{ color: AMBER }}>Specifics:</span> 10k in 6 weeks
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 10, margin: "auto 16px 28px", paddingTop: 16 }}>
        <div style={{ flex: 1, background: AMBER, color: BG, borderRadius: 999, padding: "11px 0", fontSize: 13, fontWeight: 700, textAlign: "center" }}>
          Looks right
        </div>
        <div style={{ flex: 1, border: `1.5px solid ${AMBER}`, color: AMBER, borderRadius: 999, padding: "11px 0", fontSize: 13, fontWeight: 700, textAlign: "center" }}>
          Re-record
        </div>
      </div>
    </Phone>
  );
}

/* ── Demo phone 2: Profile summary ── */
function ProfilePhone() {
  return (
    <Phone>
      {/* Header */}
      <div style={{ padding: "16px 22px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%", background: "#1e2e1e",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 16, fontWeight: 700, color: "#fff", textAlign: "center", lineHeight: 1.3 }}>
          Here&rsquo;s what your<br />coach knows.
        </div>
      </div>

      {/* Profile card */}
      <div style={{ margin: "14px 14px 0", background: "#161616", border: "1px solid #222", borderRadius: 18, padding: "14px 16px", flex: 1 }}>
        {[
          { label: "Goal", value: "Endurance + Strength · 10k in 6 weeks" },
          { label: "Experience", value: "Intermediate · 3 yrs lifting · 1 yr running" },
          { label: "Where", value: "Full gym + outdoor runs" },
          { label: "Schedule", value: "4 lifts, 3 runs per week" },
          { label: "Body", value: "Left calf tightness · Old ACL (right knee)" },
        ].map((row, i, arr) => (
          <div key={row.label} style={{ paddingBottom: i < arr.length - 1 ? 10 : 0, marginBottom: i < arr.length - 1 ? 10 : 0, borderBottom: i < arr.length - 1 ? "1px solid #1e1e1e" : "none" }}>
            <div style={{ color: AMBER, fontSize: 10, fontFamily: "var(--font-geist-mono)", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 3 }}>
              {row.label}
            </div>
            <div style={{ color: "#bbb", fontSize: 12, lineHeight: 1.4 }}>{row.value}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: "flex", justifyContent: "center", padding: "14px 0 28px" }}>
        <div style={{ background: AMBER, color: BG, borderRadius: 999, padding: "12px 36px", fontSize: 14, fontWeight: 700 }}>
          Start a session
        </div>
      </div>
    </Phone>
  );
}

/* ── Demo phone 3: Coach response + exercise card ── */
function CoachPhone() {
  return (
    <Phone>
      {/* App header */}
      <div style={{ padding: "8px 20px 12px", borderBottom: "1px solid #1a1a1a", fontFamily: "var(--font-geist-mono)", fontSize: 14, fontWeight: 700, color: AMBER, flexShrink: 0 }}>
        FITVOICE
      </div>

      {/* Chat */}
      <div style={{ flex: 1, padding: "14px 14px 0", display: "flex", flexDirection: "column", gap: 10, overflowY: "hidden" }}>
        {/* User bubble */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ background: "#1e2a1e", border: "1px solid #2a3a2a", borderRadius: "16px 16px 4px 16px", padding: "10px 13px", maxWidth: "82%", color: "#fff", fontSize: 13, lineHeight: 1.5 }}>
            What should I do today? My back&rsquo;s a bit sore from deadlifts.
          </div>
        </div>

        {/* Assistant bubble */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ background: "#1a1a1a", border: "1px solid #242424", borderRadius: "16px 16px 16px 4px", padding: "10px 13px", maxWidth: "86%", color: "#fff", fontSize: 13, lineHeight: 1.5 }}>
            Skip the heavy pulls. Let&rsquo;s do a mobility flow + light upper body.
          </div>
        </div>

        {/* Exercise card */}
        <div style={{ background: "#161616", border: "1px solid #222", borderRadius: 16, overflow: "hidden", flexShrink: 0 }}>
          <div style={{ padding: "10px 14px 8px" }}>
            <div style={{ color: AMBER, fontSize: 10, fontFamily: "var(--font-geist-mono)", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 3 }}>Exercise</div>
            <div style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Cat-cow → thoracic rotation</div>
          </div>
          {/* Video block */}
          <div style={{ background: "#1e1e1e", height: 72, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(244,162,97,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19" fill={AMBER} /></svg>
            </div>
          </div>
          {/* Form cues */}
          <div style={{ padding: "8px 14px" }}>
            {["Move slow, breathe with each rep", "Pause at end range", "Stop if anything pinches"].map((cue, i) => (
              <div key={i} style={{ display: "flex", gap: 6, color: "#aaa", fontSize: 11, lineHeight: 1.5, marginBottom: i < 2 ? 4 : 0 }}>
                <span style={{ color: AMBER }}>•</span><span>{cue}</span>
              </div>
            ))}
          </div>
          {/* Buttons */}
          <div style={{ display: "flex", gap: 8, padding: "0 14px 14px" }}>
            <div style={{ flex: 1, background: AMBER, color: BG, borderRadius: 999, padding: "9px 0", fontSize: 12, fontWeight: 700, textAlign: "center" }}>Done</div>
            <div style={{ flex: 1, border: `1.5px solid ${AMBER}`, color: AMBER, borderRadius: 999, padding: "9px 0", fontSize: 12, fontWeight: 700, textAlign: "center" }}>Skip</div>
          </div>
        </div>
      </div>
      <div style={{ height: 16 }} />
    </Phone>
  );
}

/* ── Data ── */
const features = [
  { icon: <MicIcon />, title: "Voice-first onboarding", body: "No forms, no dropdowns. Just talk. FITVOICE builds your entire profile from a single conversation." },
  { icon: <ShieldIcon />, title: "Injury-aware planning", body: "Tell it about your bad knee once. It remembers — and works around it every single session." },
  { icon: <ZapIcon />, title: "Adaptive daily coaching", body: "Your plan changes based on how you feel, what you did yesterday, and what's coming up." },
  { icon: <VideoIcon />, title: "Exercise cards with form cues", body: "Every exercise comes with a video and form tips, so you know exactly what to do and why." },
  { icon: <RefreshIcon />, title: "Context that compounds", body: "Every session builds on the last. The longer you use it, the better your coach knows you." },
];

const steps = [
  { n: "01", title: "Speak your goals", body: "Answer a few questions out loud. FITVOICE listens, understands, and extracts your goals, schedule, experience, and injury history — no forms, no sliders." },
  { n: "02", title: "Meet your profile", body: "Your coach knows everything before you start. What you're training for, where you train, what to avoid, and when you're available." },
  { n: "03", title: "Train every day", body: "Ask what to do. Get a specific plan built for today. Sore from yesterday? It adjusts. Mark it done. Repeat." },
];

/* ── Showcase row layout ── */
function ShowcaseRow({ phone, copy, reverse = false }: { phone: React.ReactNode; copy: React.ReactNode; reverse?: boolean }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 80,
      flexWrap: "wrap",
      justifyContent: "center",
      flexDirection: reverse ? "row-reverse" : "row",
    }}>
      {phone}
      <div style={{ flex: "1 1 320px", maxWidth: 440 }}>{copy}</div>
    </div>
  );
}

function ShowcaseLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 12, color: AMBER, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>
      {children}
    </div>
  );
}

function ShowcaseHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontFamily: "var(--font-geist-mono)", fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 16, lineHeight: 1.2 }}>
      {children}
    </h3>
  );
}

function ShowcaseBody({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ color: "#888", fontSize: 16, lineHeight: 1.75 }}>{children}</p>
  );
}

/* ── Main page ── */
export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ background: BG, color: "#fff", fontFamily: "var(--font-geist-sans)" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #1a1a1a",
        padding: "0 32px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: 18, fontWeight: 700, color: AMBER }}>FITVOICE</span>
        <a href="#waitlist" style={{ background: AMBER, color: BG, borderRadius: 999, padding: "9px 22px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
          Get early access
        </a>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 32px", display: "flex", alignItems: "center", gap: 80, flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ flex: "1 1 400px", maxWidth: 560 }}>
            <h1 style={{ fontFamily: "var(--font-geist-mono)", fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-2px", marginBottom: 24 }}>
              Voice coach.<br /><span style={{ color: AMBER }}>Video guidance.</span><br />Every session.
            </h1>
            <p style={{ fontSize: 18, color: "#888", lineHeight: 1.75, marginBottom: 16, maxWidth: 460 }}>
              Tell FITVOICE how you feel. It picks your workout, then walks you through every exercise — with video and form cues — so you always train right.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
              {[
                "Speak your goals — no forms, no setup",
                "Get a plan built for today, not just your goal",
                "Every exercise comes with a video + form cues",
              ].map(point => (
                <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#ccc", fontSize: 15 }}>
                  <span style={{ color: AMBER, marginTop: 2, flexShrink: 0 }}>→</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <a href="#waitlist" style={{ display: "inline-block", background: AMBER, color: BG, borderRadius: 999, padding: "14px 36px", fontSize: 16, fontWeight: 700, textDecoration: "none" }}>
              Get early access →
            </a>
          </div>
          <CoachPhone />
        </div>
      </section>

      {/* BADGE BAR */}
      <div style={{ borderTop: "1px solid #161616", borderBottom: "1px solid #161616", padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(24px, 5vw, 64px)", flexWrap: "wrap" }}>
        {["Voice-first", "AI-powered", "Injury-aware", "Built for real training"].map(label => (
          <span key={label} style={{ color: "#444", fontSize: 12, fontFamily: "var(--font-geist-mono)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</span>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 12, color: AMBER, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>How it works</div>
          <h2 style={{ fontFamily: "var(--font-geist-mono)", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-1px" }}>
            From stranger to coach in minutes.
          </h2>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {steps.map(step => (
            <div key={step.n} style={{ flex: "1 1 280px", maxWidth: 340, background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 20, padding: "32px 28px" }}>
              <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 40, fontWeight: 700, color: AMBER, opacity: 0.4, marginBottom: 20, lineHeight: 1 }}>{step.n}</div>
              <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>{step.title}</div>
              <div style={{ color: "#777", fontSize: 15, lineHeight: 1.7 }}>{step.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <section style={{ padding: "40px 32px 120px" }}>
        <div style={{ textAlign: "center", marginBottom: 96 }}>
          <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 12, color: AMBER, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>See it in action</div>
          <h2 style={{ fontFamily: "var(--font-geist-mono)", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-1px" }}>
            Everything you need, nothing you don&rsquo;t.
          </h2>
        </div>

        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexDirection: "column", gap: 120 }}>

          {/* Row 1 — Onboarding */}
          <ShowcaseRow
            phone={<OnboardingPhone />}
            copy={
              <>
                <ShowcaseLabel>Voice onboarding</ShowcaseLabel>
                <ShowcaseHeading>No forms. Just talk.</ShowcaseHeading>
                <ShowcaseBody>
                  Answer a question out loud. FITVOICE listens, transcribes, and instantly extracts your goals, timeline, and experience — no dropdowns, no sliders. It confirms what it heard before moving on.
                </ShowcaseBody>
              </>
            }
          />

          {/* Row 2 — Profile (reversed) */}
          <ShowcaseRow
            reverse
            phone={<ProfilePhone />}
            copy={
              <>
                <ShowcaseLabel>Smart profile</ShowcaseLabel>
                <ShowcaseHeading>Your coach knows you before your first rep.</ShowcaseHeading>
                <ShowcaseBody>
                  Goals, experience, schedule, where you train, old injuries — all extracted from a single conversation and stored in your profile. Your coach references all of it, every single session.
                </ShowcaseBody>
              </>
            }
          />

          {/* Row 3 — Coaching */}
          <ShowcaseRow
            phone={<CoachPhone />}
            copy={
              <>
                <ShowcaseLabel>Daily coaching</ShowcaseLabel>
                <ShowcaseHeading>Ask anything. Get a real answer.</ShowcaseHeading>
                <ShowcaseBody>
                  Tell your coach how you feel. It adjusts your plan on the spot — and every exercise comes with a video and form cues so you know exactly what you&rsquo;re doing. No guesswork.
                </ShowcaseBody>
              </>
            }
          />

        </div>
      </section>

      {/* FEATURES GRID */}
      <section style={{ background: "#0d0d0d", padding: "120px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 12, color: AMBER, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>Features</div>
            <h2 style={{ fontFamily: "var(--font-geist-mono)", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-1px" }}>
              A coach that actually knows you.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {features.map(f => (
              <div key={f.title} style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 20, padding: "28px 24px" }}>
                <div style={{ marginBottom: 18 }}>{f.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 10 }}>{f.title}</div>
                <div style={{ color: "#777", fontSize: 14, lineHeight: 1.75 }}>{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" style={{ padding: "140px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-geist-mono)", fontSize: 12, color: AMBER, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>Early access</div>
          <h2 style={{ fontFamily: "var(--font-geist-mono)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1px", marginBottom: 16 }}>
            Get FITVOICE first.
          </h2>
          <p style={{ color: "#777", fontSize: 16, lineHeight: 1.75, marginBottom: 48 }}>
            We&rsquo;re rolling out to early users. Drop your email — we&rsquo;ll send you the app when it&rsquo;s ready.
          </p>

          {status === "success" ? (
            <div style={{ background: "rgba(244,162,97,0.08)", border: "1px solid rgba(244,162,97,0.25)", borderRadius: 16, padding: "24px 32px", color: AMBER, fontSize: 16, fontWeight: 600 }}>
              You&rsquo;re on the list. We&rsquo;ll be in touch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <input
                type="email" required placeholder="your@email.com"
                value={email} onChange={e => setEmail(e.target.value)}
                style={{ flex: "1 1 240px", maxWidth: 300, background: "#111", border: "1px solid #2a2a2a", borderRadius: 999, padding: "14px 24px", color: "#fff", fontSize: 15, outline: "none", fontFamily: "var(--font-geist-sans)" }}
              />
              <button type="submit" disabled={status === "loading"}
                style={{ background: AMBER, color: BG, border: "none", borderRadius: 999, padding: "14px 32px", fontSize: 15, fontWeight: 700, cursor: status === "loading" ? "not-allowed" : "pointer", opacity: status === "loading" ? 0.7 : 1, fontFamily: "var(--font-geist-sans)" }}>
                {status === "loading" ? "Sending..." : "Notify me"}
              </button>
              {status === "error" && (
                <p style={{ width: "100%", color: "#e88", fontSize: 13, marginTop: 4 }}>Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #161616", padding: "32px", textAlign: "center", color: "#333", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
        <span style={{ fontFamily: "var(--font-geist-mono)", color: AMBER }}>FITVOICE</span>
        <span>© 2025. All rights reserved.</span>
      </footer>

    </div>
  );
}
