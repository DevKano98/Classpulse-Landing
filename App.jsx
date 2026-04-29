import './App.css'
import { useState, useEffect } from 'react'

const tickerItems = [
  { tag: 'MATHS', label: 'Lost spike detected during fractions — 34% of class signalled confusion', type: 'alert' },
  { tag: 'SCIENCE', label: 'AI doubt summary ready: 3 common questions grouped for teacher', type: 'info' },
  { tag: 'ENGLISH', label: 'Comprehension steady — 78% Got It after re-explanation', type: 'good' },
  { tag: 'HISTORY', label: 'New session started — 42 students joined via QR code', type: 'info' },
  { tag: 'PHYSICS', label: 'Weekly insight: Tuesday 3rd period shows lowest engagement pattern', type: 'alert' },
  { tag: 'MATHS', label: 'Lost spike detected during fractions — 34% of class signalled confusion', type: 'alert' },
  { tag: 'SCIENCE', label: 'AI doubt summary ready: 3 common questions grouped for teacher', type: 'info' },
  { tag: 'ENGLISH', label: 'Comprehension steady — 78% Got It after re-explanation', type: 'good' },
]

const features = [
  {
    icon: '◎',
    title: 'Anonymous live signals',
    description: 'Students tap Got It, Sort Of, or Lost in under a second — honest signals without public embarrassment.',
  },
  {
    icon: '⚡',
    title: 'Instant teacher dashboard',
    description: 'Watch comprehension shift in real time. Spot Lost spikes fast and respond before confusion spreads.',
  },
  {
    icon: '✦',
    title: 'AI doubt summaries',
    description: 'ClassPulse groups similar student questions into short, useful summaries so teachers address real blockers.',
  },
  {
    icon: '◈',
    title: 'Offline-ready classrooms',
    description: 'Built for under-resourced schools — low-friction setup, browser-based, with fallback when internet is unreliable.',
  },
]

const steps = [
  { num: '01', title: 'Start a session', desc: 'Share a simple 4-digit code or QR link with your class.' },
  { num: '02', title: 'Students join instantly', desc: 'Any phone browser, no download, anonymous comprehension signals in seconds.' },
  { num: '03', title: 'Act in real time', desc: 'Monitor trends, review AI-grouped doubts, and adjust instruction on the fly.' },
]

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    description: 'For teachers getting started with live classroom check-ins.',
    details: ['1 active classroom', 'Live comprehension dashboard', 'Basic question queue'],
    featured: false,
    cta: 'Start Free',
  },
  {
    name: 'Premium',
    price: '₹1,499',
    period: '/month',
    description: 'For growing schools that want stronger visibility and better follow-up.',
    details: ['Unlimited sessions', 'AI doubt summaries', 'Weekly teacher insights', 'Priority support'],
    featured: true,
    cta: 'Start 15-day Trial',
  },
  {
    name: 'Gold',
    price: '₹3,499',
    period: '/month',
    description: 'For institutions rolling out ClassPulse across multiple campuses.',
    details: ['Admin reporting', 'Priority onboarding', 'API access', 'Advanced implementation support'],
    featured: false,
    cta: 'Contact Sales',
  },
]

const faqs = [
  { q: 'Do students need to install an app?', a: 'No. Students join through a mobile-friendly browser — nothing to download before class.' },
  { q: 'Will teachers see which student is confused?', a: 'No. The in-class experience is fully anonymous so students feel safe sharing honest signals.' },
  { q: 'Is ClassPulse only for high-tech schools?', a: 'Not at all. It is designed for real classrooms where bandwidth and devices can be limited.' },
  { q: 'Can schools start small?', a: 'Yes. A single teacher can begin with one class, prove the value, and scale to a full rollout later.' },
  { q: 'How accurate are the AI summaries?', a: 'The AI groups semantically similar questions — teachers see 3–5 themes instead of 40 individual messages.' },
  { q: 'Is student data stored or shared?', a: 'No personally identifiable data is stored. Signals are anonymised and aggregated at session level.' },
]

function AnimatedBar({ pct, color, delay = 0 }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), 600 + delay)
    return () => clearTimeout(t)
  }, [pct, delay])
  return (
    <div className="signal-track">
      <div className={`signal-fill ${color}`} style={{ width: `${width}%`, transition: 'width 1.2s cubic-bezier(.16,1,.3,1)' }} />
    </div>
  )
}

export default function App() {
  const [billedYearly, setBilledYearly] = useState(true)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="page-shell">

      {/* ── LIVE TICKER ── */}
      <div className="ticker-bar" aria-label="Live classroom alerts">
        <span className="ticker-live">● LIVE</span>
        <div className="ticker-track">
          <div className="ticker-inner">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="ticker-item">
                <span className={`ticker-tag tag-${item.type}`}>{item.tag}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── TOPBAR ── */}
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 64 64" className="brand-svg">
                <rect x="8" y="10" width="48" height="44" rx="14" fill="#dbeafe" />
                <rect x="15" y="16" width="34" height="15" rx="4.5" fill="#bfdbfe" />
                <path d="M22 23h12M22 27h8" stroke="#2255f4" strokeWidth="2.4" strokeLinecap="round" fill="none" />
                <circle cx="32" cy="39" r="5.5" fill="#2255f4" />
                <path d="M22 50c2.6-5 6.3-7.6 10-7.6s7.4 2.6 10 7.6" stroke="#2255f4" strokeWidth="2.7" strokeLinecap="round" fill="none" />
                <circle cx="22" cy="45.5" r="3.6" fill="#93c5fd" />
                <circle cx="42" cy="45.5" r="3.6" fill="#93c5fd" />
                <path d="M44 18.5c3.4 0.7 5.5 3.2 5.5 6.3S47.4 30.4 44 31" stroke="#2255f4" strokeWidth="2.4" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div>
              <p className="brand-name">ClassPulse</p>
              <p className="brand-tag">Live classroom comprehension</p>
            </div>
          </div>

          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nav-search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input placeholder="Search sessions…" />
          </div>

          <a href="#pricing" className="nav-cta">Get Started Free</a>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="hero-section">
          <div className="hero-bg-blob blob-1" />
          <div className="hero-bg-blob blob-2" />

          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">India's #1 classroom comprehension tool</p>
              <h1>
                Give every teacher a<br />
                <span className="hero-highlight">real-time pulse</span><br />
                of understanding.
              </h1>
              <p className="hero-text">
                ClassPulse helps students share confusion anonymously while teachers see
                live comprehension trends, smarter AI question summaries, and practical
                insights that improve every lesson — in under 3 seconds.
              </p>

              {/* ── THREE APP BUTTONS ── */}
              <div className="app-buttons">
                <a href="#" className="app-btn student-btn">
                  <span className="app-btn-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </span>
                  <span className="app-btn-text">
                    <span className="app-btn-label">Student App</span>
                    <span className="app-btn-sub">Join any session instantly</span>
                  </span>
                </a>
                <a href="#" className="app-btn teacher-btn">
                  <span className="app-btn-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                  </span>
                  <span className="app-btn-text">
                    <span className="app-btn-label">Teacher App</span>
                    <span className="app-btn-sub">Start a live session</span>
                  </span>
                </a>
                <a href="#" className="app-btn dashboard-btn">
                  <span className="app-btn-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                  </span>
                  <span className="app-btn-text">
                    <span className="app-btn-label">Dashboard</span>
                    <span className="app-btn-sub">School-wide analytics</span>
                  </span>
                </a>
              </div>

              <div className="hero-badges">
                <span className="badge"><span className="badge-dot green" />1 tap to signal confusion</span>
                <span className="badge"><span className="badge-dot blue" />Live dashboard updates</span>
                <span className="badge"><span className="badge-dot gold" />Zero install needed</span>
              </div>
            </div>

            {/* ── HERO PANEL ── */}
            <div className="hero-panel">
              <div className="panel-card panel-main">
                <div className="panel-header">
                  <span className="panel-label">Live Class View</span>
                  <span className="live-dot">● LIVE</span>
                </div>
                <div className="signal-rows">
                  {[
                    { label: 'Got It', pct: 52, color: 'green' },
                    { label: 'Sort Of', pct: 29, color: 'gold' },
                    { label: 'Lost', pct: 19, color: 'coral' },
                  ].map((s, i) => (
                    <div key={s.label} className="signal-row">
                      <span className="signal-label">{s.label}</span>
                      <AnimatedBar pct={s.pct} color={s.color} delay={i * 150} />
                      <strong className="signal-pct">{s.pct}%</strong>
                    </div>
                  ))}
                </div>
                <div className="panel-students">
                  <span>42 students connected</span>
                  <span className="session-code">CODE: 7823</span>
                </div>
              </div>

              <div className="panel-card panel-ai">
                <p className="panel-label">✦ AI Summary</p>
                <p className="panel-ai-text">Students are mainly confused about <strong>variable meaning</strong>, order of operations, and when to apply the formula.</p>
                <div className="ai-tags">
                  <span className="ai-tag">Variable meaning</span>
                  <span className="ai-tag">BODMAS order</span>
                  <span className="ai-tag">Formula application</span>
                </div>
              </div>

              <div className="panel-card panel-alert">
                <div className="alert-dot" />
                <div>
                  <p className="panel-label">Teacher Insight</p>
                  <strong>Lost spike detected</strong>
                  <span className="alert-sub">during fractions at 14:32</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DARK SECTION — SEE EVERY VERDICT ── */}
        <section className="dark-section">
          <div className="dark-inner">
            <div className="dark-copy">
              <p className="eyebrow eyebrow-light">The ClassPulse App</p>
              <h2 className="dark-heading">See every signal.<br />Instantly.</h2>
              <p className="dark-subtext">
                Clean, fast, and designed for real classrooms — not just tech-forward schools.
                Students send a signal in one tap. Teachers see the room shift in real time.
              </p>
              <ul className="dark-list">
                <li><span className="dark-icon">⚡</span> Sub-2s signal delivery to teacher dashboard</li>
                <li><span className="dark-icon">✦</span> AI groups similar doubts automatically</li>
                <li><span className="dark-icon">◈</span> Works on any phone browser, no app install</li>
              </ul>
            </div>

            <div className="dark-mockup">
              <div className="mockup-browser">
                <div className="mockup-bar">
                  <span className="dot red" /><span className="dot amber" /><span className="dot green-dot" />
                  <span className="mockup-url">classpulse.in/session/7823</span>
                  <span className="mockup-live">● LIVE</span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-signal-row">
                    <span className="mockup-platform">📱 STUDENT QUESTION · Anonymous</span>
                    <span className="mockup-time">0.4s ago</span>
                  </div>
                  <p className="mockup-claim">"I don't understand when to use brackets vs when to just multiply straight away."</p>
                  <div className="mockup-steps">
                    <div className="mockup-step done"><span>✓</span> Signal received</div>
                    <div className="mockup-step done"><span>✓</span> Similar questions grouped · 11 others asked this</div>
                    <div className="mockup-step done"><span>✓</span> AI pre-analysis · BODMAS confusion (0.88)</div>
                    <div className="mockup-step active"><span className="spin">◌</span> Notifying teacher dashboard…</div>
                  </div>
                  <div className="mockup-verdict">
                    <div className="verdict-left">
                      <p className="verdict-label">DOUBT CLUSTER</p>
                      <strong className="verdict-text">Order of Operations</strong>
                      <p className="verdict-sub">PIB / NCERT cross-referenced</p>
                    </div>
                    <div className="verdict-right">
                      <p className="verdict-label">PRIORITY</p>
                      <strong className="verdict-score coral-text">HIGH</strong>
                    </div>
                  </div>
                  <div className="mockup-stats">
                    <div><strong>11</strong><span>Students</span></div>
                    <div><strong>0.4s</strong><span>Detected in</span></div>
                    <div><strong>MATHS</strong><span>Subject</span></div>
                  </div>
                  <div className="mockup-badge">📋 AI summary auto-generated for teacher</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" className="content-section">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">Features</p>
              <h2>Designed to help teachers act faster<br />and teach with confidence.</h2>
            </div>
            <div className="feature-grid">
              {features.map((f) => (
                <article key={f.title} className="feature-card">
                  <span className="feature-icon">{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="content-section alt-section">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">How It Works</p>
              <h2>Three simple steps from setup<br />to actionable insight.</h2>
            </div>
            <div className="steps-grid">
              {steps.map((s) => (
                <article key={s.num} className="step-card">
                  <span className="step-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className="content-section">
          <div className="section-wrap">
            <div className="section-heading centered">
              <p className="eyebrow">Pricing</p>
              <h2>Verify All Your Classrooms<br />From One Place.</h2>
              <div className="billing-badges">
                <span className="billing-badge">✓ Free 15-day trial</span>
                <span className="billing-badge">✓ Unlimited teachers</span>
                <span className="billing-badge">✓ Cancel anytime</span>
              </div>
              <div className="billing-toggle">
                <span className={!billedYearly ? 'toggle-active' : ''}>Billed Monthly</span>
                <button
                  className={`toggle-switch ${billedYearly ? 'on' : 'off'}`}
                  onClick={() => setBilledYearly(!billedYearly)}
                  aria-label="Toggle billing period"
                >
                  <span className="toggle-thumb" />
                </button>
                <span className={billedYearly ? 'toggle-active' : ''}>
                  Billed Yearly <span className="save-tag">save 3 months</span>
                </span>
              </div>
            </div>
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article key={plan.name} className={`price-card ${plan.featured ? 'featured' : ''}`}>
                  {plan.featured && <div className="popular-badge">MOST POPULAR</div>}
                  <p className="plan-name">{plan.name}</p>
                  <p className="plan-desc">{plan.description}</p>
                  <div className="price-line">
                    <h3>{billedYearly && plan.price !== '₹0' ? plan.price.replace('1,499', '1,124').replace('3,499', '2,624') : plan.price}</h3>
                    <span>{plan.period}</span>
                  </div>
                  <a href="#faq" className={`plan-cta ${plan.featured ? 'cta-featured' : 'cta-default'}`}>
                    {plan.cta}
                  </a>
                  <ul className="plan-features">
                    {plan.details.map((d) => (
                      <li key={d}><span className="check">✓</span>{d}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="faq-section">
          <div className="faq-inner">
            <div className="section-heading centered">
              <p className="eyebrow eyebrow-light">FAQ</p>
              <h2 className="faq-heading">Frequently asked<br />questions.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item, i) => (
                <article key={item.q} className={`faq-card ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {item.q}
                    <span className="faq-chevron">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && <p className="faq-a">{item.a}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="brand">
            <div className="brand-mark brand-mark-sm">
              <svg viewBox="0 0 64 64" className="brand-svg">
                <rect x="8" y="10" width="48" height="44" rx="14" fill="#1e3a8a" />
                <circle cx="32" cy="39" r="5.5" fill="#93c5fd" />
              </svg>
            </div>
            <div>
              <p className="brand-name brand-name-light">ClassPulse</p>
              <p className="brand-tag">Live classroom comprehension, finally visible</p>
            </div>
          </div>
          <p className="footer-copy">© 2025 ClassPulse. Built for schools that cannot afford silent confusion.</p>
        </div>
      </footer>
    </div>
  )
}